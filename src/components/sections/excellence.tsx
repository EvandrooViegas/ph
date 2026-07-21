"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data/site-data";
import { useInView } from "@/lib/useInView";

export function Excellence() {
  const { excellence } = siteData;
  const images = excellence.images;
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { ref: sectionRef, isInView } = useInView();

  const visible = 3;
  
  // Create infinite loop by duplicating images
  const extendedImages = [...images, ...images, ...images];
  const totalImages = extendedImages.length;

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalImages);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, totalImages]);

  function prev() {
    setAutoPlay(false);
    setIndex((i) => (i - 1 + totalImages) % totalImages);
  }

  function next() {
    setAutoPlay(false);
    setIndex((i) => (i + 1) % totalImages);
  }

  useEffect(() => {
    if (!autoPlay) {
      const timer = setTimeout(() => setAutoPlay(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  return (
    <section 
      ref={sectionRef}
      id="galeria" 
      className="bg-secondary px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className={`font-script text-[2.3rem] text-dark md:text-[2.645rem] ${isInView ? 'animate-slide-up' : 'animation-hidden'}`}>
          {excellence.eyebrow}
        </p>
        <h2 className={`mt-1 font-display text-[2.645rem] uppercase leading-tight text-dark sm:text-[3.31rem] md:text-[3.97rem] ${isInView ? 'animate-slide-up' : 'animation-hidden'}`} style={{ animationDelay: isInView ? '0.15s' : '0s' }}>
          {excellence.titleLine1}{" "}
          <span className="brush-highlight-garantida">
            {excellence.titleHighlight}
          </span>
        </h2>

        <div className={`relative mt-12 ${isInView ? 'animate-fade-in' : 'animation-hidden'}`} style={{ animationDelay: isInView ? '0.3s' : '0s' }}>
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex carousel-slide"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`,
              }}
            >
              {extendedImages.map((img, i) => (
                <div
                  key={`${img.src}-${i}`}
                  className="w-full shrink-0 px-2 sm:w-1/2 md:w-1/3"
                >
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-dark rounded-lg">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-dark text-secondary shadow-lg transition-all duration-200 hover:bg-primary hover:text-dark hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Seguinte"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-dark text-secondary shadow-lg transition-all duration-200 hover:bg-primary hover:text-dark hover:scale-110 active:scale-95"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
