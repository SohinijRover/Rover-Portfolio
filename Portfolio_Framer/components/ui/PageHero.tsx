import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-white px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-foreground/50">
            {eyebrow}
          </p>
          <h1 className="font-display max-w-3xl text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/60">
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
