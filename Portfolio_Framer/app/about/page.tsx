import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { experience, siteConfig, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}, a ${siteConfig.title} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="Engineering the systems that ship inside real products."
        description={`I'm Sohini, a ${siteConfig.title} based in ${siteConfig.location}, currently building system-level Android applications and automation tooling for automotive platforms at KPIT Technologies.`}
      />

      <section className="bg-white px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-500 via-red-500 to-rose-600">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl font-bold text-white/90">
                  SJ
                </span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/70">
            <Reveal>
              <p>
                I work across the stack that ships inside cars — AOSP apps in
                Java and Kotlin, Python automation that keeps regression
                cycles honest, and Embedded C/C++ on instrument cluster HMIs.
                Two years in, I&apos;ve shipped features across Honda IVI and
                Denso cluster platforms, and built the regression tooling
                that keeps those releases sane.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Lately I&apos;ve been applying LLMs and Python to time-series
                prediction — fine-tuning models on financial news sentiment,
                batching inference, and turning the results into something
                a dashboard can actually show. I&apos;m especially interested
                in bringing this engineering background into healthcare
                technology next.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Button href="/contact">Get in touch</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-alt px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Skills &amp; Tools
            </h2>
          </Reveal>

          <StaggerContainer className="mt-12 grid gap-10 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <StaggerItem key={group.category}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/50">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-lg font-medium">
                      {skill}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Experience
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-foreground/10 border-t border-foreground/10">
            {experience.map((role, i) => (
              <Reveal key={role.role} delay={i * 0.05}>
                <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <span className="text-sm font-medium uppercase tracking-widest text-foreground/40 sm:w-40 sm:shrink-0">
                    {role.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{role.role}</h3>
                    <p className="text-sm font-medium text-foreground/50">
                      {role.company}
                    </p>
                    <p className="mt-2 text-foreground/60">{role.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
