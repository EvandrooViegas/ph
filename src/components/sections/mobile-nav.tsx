"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { navbar, links } = siteData;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center text-secondary transition-colors hover:text-primary"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-[60px] z-40 flex flex-col items-center gap-8 bg-dark/98 backdrop-blur-sm pt-16 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
          {navbar.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl uppercase tracking-wide text-secondary hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-fit">
            <Link href={links.booking} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              {navbar.ctaLabel}
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
