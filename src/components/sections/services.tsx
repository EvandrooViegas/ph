"use client";

import Image from "next/image";
import { siteData } from "@/data/site-data";
import { useInView } from "@/lib/useInView";

export function Services() {
  const { services } = siteData;
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section ref={sectionRef} id="servicos" className="bg-dark px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div className={isInView ? 'animate-slide-in-left' : 'animation-hidden'}>
          <p className="font-script text-[2.3rem] text-primary md:text-[2.645rem]">
            {services.eyebrow}
          </p>
          <h2 className="mt-1 font-display text-[2.645rem] uppercase leading-[1.05] text-secondary sm:text-[3.31rem] md:text-[3.97rem]">
            <span className="block">{services.titleLine1}</span>
            <span className="brush-highlight text-dark block w-fit">
              {services.titleHighlight}
            </span>
          </h2>

          <ul className="mt-10 max-w-md divide-y divide-secondary/15">
            {services.list.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-3 font-display text-[1.06rem] uppercase tracking-wide text-secondary sm:text-[1.21rem]"
              >
                <span>{item.name}</span>
                <span className="text-primary">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`relative aspect-[3/4] w-full overflow-hidden md:aspect-auto ${isInView ? 'animate-slide-in-right' : 'animation-hidden'}`}>
          <Image
            src={services.image}
            alt="Cliente a receber um corte de cabelo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      </div>
    </section>
  );
}
