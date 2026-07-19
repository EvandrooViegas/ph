import Link from "next/link";
import { Home, Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site-data";

export function Contact() {
  const { contact } = siteData;

  const items = [
    { icon: Home, value: contact.address, href: undefined },
    { icon: Mail, value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    {
      icon: Instagram,
      value: contact.instagramHandle,
      href: siteData.links.instagram,
    },
  ];

  return (
    <section id="contacto" className="bg-dark px-6 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 overflow-hidden md:grid-cols-2 md:gap-16">
        <div className="relative min-h-[360px] w-full overflow-hidden md:min-h-[460px]">
          <iframe
            title="Mapa - localização da barbearia"
            src={contact.map.embedSrc}
            className="h-full w-full min-h-[360px] border-0 grayscale-[15%] md:min-h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <p className="font-script text-[2.3rem] text-primary md:text-[2.645rem]">
            {contact.eyebrow}
          </p>
          <h2 className="mt-1 font-display text-[2.645rem] uppercase leading-tight text-secondary sm:text-[3.31rem]">
            {contact.title}
          </h2>

          <ul className="mt-8 space-y-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-dark">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="font-body text-[1rem] text-secondary/90">
                    {item.value}
                  </span>
                </span>
              );
              return (
                <li key={i}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="transition-opacity hover:opacity-80"
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>

          <Button asChild className="mt-8">
            <Link href={siteData.links.booking} target="_blank" rel="noopener noreferrer">
              {contact.buttonLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
