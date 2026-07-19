import { siteData } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-dark px-6 py-8 text-center md:px-10">
      <p className="font-body text-[1rem] text-secondary/60">
        {siteData.footer.text}
      </p>
    </footer>
  );
}
