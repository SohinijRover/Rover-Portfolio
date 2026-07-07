import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}, a ${siteConfig.title} open to new roles and interesting problems.`,
};

export default function ContactPage() {
  return (
    <section className="bg-dark px-6 pb-28 pt-36 sm:px-10 sm:pt-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/40">
            Contact
          </p>
          <h1 className="font-display max-w-2xl text-5xl font-bold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/60">
            Open to software engineering roles and interesting problems —
            especially where embedded systems, Android, or ML meet the real
            world. Fill out the form and I&apos;ll get back to you within a
            couple of days.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal delay={0.05}>
            <div className="space-y-10">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/40">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xl font-semibold text-white hover:text-white/70"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/40">
                  Based in
                </p>
                <p className="text-xl font-semibold text-white">
                  {siteConfig.location}
                </p>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/40">
                  Elsewhere
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {siteConfig.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
