"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site-data";
import { useInView } from "@/lib/useInView";

export function Hero() {
  const { hero } = siteData;
  const { ref: titleRef, isInView: titleInView } = useInView();

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-dark md:min-h-[720px]">
      <Image
        src={hero.backgroundImage}
        alt="Produtos e ferramentas de barbearia"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 text-center md:px-10 md:pt-32">
        <h1 
          ref={titleRef}
          className={`font-display text-[3.31rem] uppercase leading-[1.05] tracking-wide text-secondary sm:text-[4.025rem] md:text-[4.77rem] lg:text-[5.61rem] ${titleInView ? 'animate-slide-up' : 'animation-hidden'}`}
        >
          {hero.titleLine1}
          <br />
          <span className="brush-highlight">
            {hero.titleHighlight}
          </span>{" "}
          {hero.titleLine2}
        </h1>

        <div 
          className={`mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row ${titleInView ? 'animate-fade-in' : 'animation-hidden'}`}
          style={{ animationDelay: titleInView ? '0.2s' : '0s' }}
        >
          <Button asChild size="lg">
            <Link href={siteData.links.booking} target="_blank" rel="noopener noreferrer">
              {hero.primaryButtonLabel}
            </Link>
          </Button>
          <Link
            href={hero.secondaryButtonHref}
            className="font-body text-sm text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {hero.secondaryButtonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
