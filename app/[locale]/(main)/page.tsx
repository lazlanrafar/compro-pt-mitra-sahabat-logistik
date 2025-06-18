import {
  ArrowRight,
  Truck,
  Warehouse,
  Package,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin as LocationIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import { Link } from "@/i18n/navigation";
import LeadForm from "@/components/forms/lead-form";
import { useTranslations } from "next-intl";
import H1 from "@/components/ui/h1";
import Gallery from "@/components/ui/gallery";

const iconMap = {
  Truck,
  Warehouse,
  Package,
  LocationIcon,
  Users,
  Clock,
};

export default function Home() {
  const t = useTranslations();

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Container Shipping Operations",
      title: "Container Shipping",
      description: "Modern container handling facilities"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Warehouse Operations",
      title: "Warehouse Management",
      description: "State-of-the-art warehouse facilities"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Port Operations",
      title: "Port Operations",
      description: "Efficient port handling services"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Logistics Network",
      title: "Global Network",
      description: "Worldwide logistics connections"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Air Cargo",
      title: "Air Freight",
      description: "Fast air cargo solutions"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Truck Fleet",
      title: "Ground Transportation",
      description: "Reliable truck fleet services"
    }
  ];

  return (
    <>
      {/* Hero Section - Minimalist with MSL Colors */}
      <section className="relative min-h-screen flex items-center bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-6">
                <H1 text={t("home.hero.title")} size="xl" />
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {t("home.hero.subtitle")}
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-msl-navy hover:bg-msl-dark-blue text-white px-8 py-3"
                  >
                    {t("home.hero.cta_primary")}
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-msl-navy text-msl-navy hover:bg-msl-navy hover:text-white px-8 py-3"
                  >
                    {t("common.learn_more")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Logistics Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean with MSL Colors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="0">
              <div className="text-4xl font-bold text-msl-navy mb-2">
                {siteConfig.company.experience}
              </div>
              <div className="text-gray-600">{t("home.hero.stats.experience")}</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-msl-orange mb-2">
                {siteConfig.company.clients}
              </div>
              <div className="text-gray-600">{t("home.hero.stats.clients")}</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-msl-brown mb-2">
                {siteConfig.company.satisfaction}
              </div>
              <div className="text-gray-600">{t("home.hero.stats.satisfaction")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Grid with MSL Colors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <H1 text={t("home.services.title")} size="lg" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw("home.services.items").map((service: any, index: number) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 border-gray-200 bg-white p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-msl-orange/10 rounded-xl flex items-center justify-center group-hover:bg-msl-orange transition-colors">
                      <IconComponent className="h-6 w-6 text-msl-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-msl-navy">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-msl-navy hover:bg-msl-dark-blue text-white px-8 py-3"
              >
                {t("home.services.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <H1 text="Our *Operations* Gallery" size="lg" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our modern facilities and operations
            </p>
          </div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* About Section - Clean with MSL Colors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <H1 text={t("home.about.title")} size="lg" />
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("home.about.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-msl-navy mb-2">
                    {siteConfig.company.experience}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("home.about.stats.experience")}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-msl-orange mb-2">
                    {siteConfig.company.clients}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("home.about.stats.clients")}
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white px-8 py-3">
                  {t("home.about.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Warehouse Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - MSL Navy Background */}
      <section className="py-24 bg-msl-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <H1 text={t("home.contact.title")} size="lg" className="text-white" />
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t("home.contact.subtitle")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {t("common.phone")}
                    </div>
                    <div className="text-gray-300">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {t("common.email")}
                    </div>
                    <div className="text-gray-300">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-msl-orange hover:bg-msl-orange/90 text-white px-8 py-3"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {t("home.contact.cta_primary")}
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-white" data-aos="fade-left">
              <CardHeader>
                <CardTitle className="text-2xl text-msl-navy">
                  {t("home.contact.form_title")}
                </CardTitle>
                <CardDescription>
                  {t("home.contact.form_subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeadForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}