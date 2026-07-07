"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { projects } from "@/lib/data";

export default function WorkGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects I've shipped."
        description="A mix of machine learning, embedded systems, robotics, and computer vision — built solo, end to end."
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/15 text-foreground/60 hover:border-foreground/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="bg-white px-6 pb-28 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer key={active} className="grid gap-6 sm:grid-cols-2">
            {filtered.map((project) => (
              <StaggerItem key={project.slug}>
                <motion.div layout>
                  <ProjectCard project={project} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
