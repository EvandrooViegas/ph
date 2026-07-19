"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data/site-data";

export function Excellence() {
  const { excellence } = siteData;
  const images = excellence.images;
  const [index, setIndex] = useState(0);

  const visible = 3;
  const canGoPrev = index > 0;
  const canGoNext = index < images.length - 1;

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function next() {
    setIndex((i) => Math.min(images.length - 1, i + 1));
  }

  return (
    <section id="galeria" className="bg-secondary px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-script text-[2.3rem] text-dark md:text-[2.645rem]">
          {excellence.eyebrow}
        </p>
        <h2 className="mt-1 font-display text-[2.645rem] uppercase leading-tight text-dark sm:text-[3.31rem] md:text-[3.97rem]">
          {excellence.titleLine1}{" "}
          <span className="brush-highlight-garantida">
            {excellence.titleHighlight}
          </span>
        </h2>

        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={img.src + i}
                  className="w-full shrink-0 px-2 sm:w-1/2 md:w-1/3"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark">
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
            disabled={!canGoPrev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-dark text-secondary shadow-lg transition-opacity hover:bg-primary hover:text-dark disabled:opacity-30"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canGoNext}
            aria-label="Seguinte"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-dark text-secondary shadow-lg transition-opacity hover:bg-primary hover:text-dark disabled:opacity-30"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
