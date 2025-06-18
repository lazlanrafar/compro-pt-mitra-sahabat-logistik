"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/app/logo.png";

export default function AppNavbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.services"), href: "/services" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.contact"), href: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <Image
                src={Logo}
                alt="MSL Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-msl-navy transition-colors font-medium ${
                  pathname === item.href ? "text-msl-navy" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {locale === "id" ? "ID" : "EN"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={pathname} locale="id">
                    🇮🇩 Bahasa Indonesia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={pathname} locale="en">
                    🇺🇸 English
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                {t("common.contact_us")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-msl-navy hover:bg-msl-navy/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Image
                      src={Logo}
                      alt="MSL Logo"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={`text-lg font-medium transition-colors py-2 px-3 rounded-lg ${
                          pathname === item.href
                            ? "text-msl-navy bg-msl-navy/10"
                            : "text-gray-700 hover:text-msl-navy hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Language Switcher */}
                  <div className="border-t pt-6">
                    <p className="text-sm font-medium text-gray-500 mb-3">
                      {t("navigation.language")}
                    </p>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href={pathname}
                        locale="id"
                        onClick={closeMenu}
                        className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                          locale === "id"
                            ? "text-msl-navy bg-msl-navy/10"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>🇮🇩</span>
                        <span>Bahasa Indonesia</span>
                      </Link>
                      <Link
                        href={pathname}
                        locale="en"
                        onClick={closeMenu}
                        className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                          locale === "en"
                            ? "text-msl-navy bg-msl-navy/10"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>🇺🇸</span>
                        <span>English</span>
                      </Link>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="border-t pt-6">
                    <Link
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      <Button className="w-full bg-msl-navy hover:bg-msl-dark-blue text-white">
                        {t("common.contact_us")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}