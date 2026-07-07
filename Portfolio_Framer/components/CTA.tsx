import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export default function CTA() {
  return (
    <section className="bg-dark px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-between">
          <Reveal>
            <h2 className="font-display text-5xl font-bold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/60">
              Open to software engineering roles and interesting problems —
              especially where embedded systems, Android, or ML meet the
              real world.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-16 hidden lg:block">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ContactForm />
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 lg:hidden">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
