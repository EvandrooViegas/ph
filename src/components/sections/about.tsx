import Image from "next/image";
import { siteData } from "@/data/site-data";

export function About() {
  const { about } = siteData;

  return (
    <section className="bg-dark px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden md:max-w-md">
          <Image
            src={about.image}
            alt="Foto do barbeiro"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>

        <div>
          <p className="font-script text-[2.3rem] text-primary md:text-[2.645rem]">
            {about.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[2.645rem] uppercase leading-tight text-secondary sm:text-[3.31rem]">
            {about.title}
          </h2>
          <p className="mt-6 max-w-md font-body text-[1.06rem] leading-relaxed text-secondary/80">
            {about.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
