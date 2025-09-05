"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  description?: string;
  category?: string;
}

interface VisualCarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function VisualCarousel({
  items,
  autoplay = true,
  autoplayDelay = 4000,
}: VisualCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, autoplay, autoplayDelay]);

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_50%] xl:flex-[0_0_40%]"
            >
              <div className="mx-2 overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, (max-width: 1280px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Category Badge */}
                  {item.category && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <h3 className="mb-2 line-clamp-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="line-clamp-2 text-sm text-gray-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70"
        onClick={scrollPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70"
        onClick={scrollNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-blue-600"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
