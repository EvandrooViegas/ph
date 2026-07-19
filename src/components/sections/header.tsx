import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site-data";
import { MobileNav } from "@/components/sections/mobile-nav";

export function Header() {
  const { navbar, links, brand } = siteData;

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="#"
          className="font-script text-[2.3rem] text-secondary md:text-[2.645rem]"
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navbar.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[1rem] font-normal tracking-wide text-secondary/90 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-secondary transition-colors hover:text-primary"
          >
            <Instagram size={20} strokeWidth={1.75} />
          </Link>
          <Link
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-secondary transition-colors hover:text-primary"
          >
            <MessageCircle size={20} strokeWidth={1.75} />
          </Link>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={links.booking} target="_blank" rel="noopener noreferrer">
              {navbar.ctaLabel}
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
