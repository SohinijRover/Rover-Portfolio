import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <Reveal>
        <div>
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground/50">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>
      </Reveal>
      {action && <Reveal delay={0.1}>{action}</Reveal>}
    </div>
  );
}
