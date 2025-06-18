"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function Gallery({ images, className }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    }
  };

  // Add keyboard event listeners
  useState(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      {/* Gallery Grid */}
      <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => openImage(index)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={closeImage}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image Container */}
          <div className="max-w-4xl max-h-full flex flex-col items-center">
            <div className="relative max-h-[80vh] w-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            
            {/* Image Info */}
            <div className="mt-6 text-center text-white max-w-2xl">
              <h3 className="text-2xl font-semibold mb-2">
                {images[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {images[selectedImage].description}
              </p>
              <div className="mt-4 text-sm text-gray-400">
                {selectedImage + 1} of {images.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all",
                  selectedImage === index
                    ? "border-white"
                    : "border-transparent opacity-60 hover:opacity-80"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}