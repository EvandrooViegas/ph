import type { Metadata } from "next";

// Fontes auto-hospedadas via @fontsource (não dependem do Google Fonts em
// tempo de build, funcionam totalmente offline).
import "@fontsource/anton/400.css"; // Anton -> títulos (display)
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css"; // Caveat -> substituto livre de "Apricots" (subtítulos)
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css"; // Lato -> texto corrido

import "./globals.css";
import { siteData } from "@/data/site-data";

export const metadata: Metadata = {
  title: `${siteData.brand.name} | Barbearia`,
  description:
    "Venha dar um toque no visual connosco. Cortes, barba e muito mais na " +
    siteData.brand.name +
    ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-background font-body text-secondary">
        {children}
      </body>
    </html>
  );
}
