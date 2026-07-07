import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-white px-6 py-28 sm:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Career" title="Experience" />

        <div className="mt-16 divide-y divide-foreground/10 border-t border-foreground/10">
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
  );
}
