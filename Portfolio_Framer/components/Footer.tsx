import Link from "next/link";
import { siteConfig } from "@/lib/data";
import ScrollToTop from "@/components/ui/ScrollToTop";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark pt-24 text-white">
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute left-1/2 top-16 w-full -translate-x-1/2 select-none whitespace-nowrap text-center text-[22vw] font-bold leading-none text-orange-500/10 sm:top-20"
      >
        SOHINI
      </span>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-16 pb-16 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-bold">
              Let&apos;s build something that ships.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Android, Python, and embedded systems engineering — from
              instrument clusters to ML pipelines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-white/40">
                /Quick links
              </p>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-white/40">
                /Contact
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40">
          <span>©{siteConfig.copyrightYear} {siteConfig.name} — Built with Next.js &amp; Framer Motion</span>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}
