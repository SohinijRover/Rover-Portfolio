"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";
import DashboardMockup from "./DashboardMockup";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-3 sm:p-4`}
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <DashboardMockup
            variant={project.variant}
            accent={project.accent}
            label={project.stack}
          />
        </motion.div>

        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.6, rotate: -45 },
            hover: { opacity: 1, scale: 1, rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg"
        >
          <ArrowUpRight size={18} />
        </motion.span>
      </motion.div>

      <div className="mt-5">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-foreground/40">
          {project.category}
          {project.badge && (
            <span className="text-foreground/70"> · {project.badge}</span>
          )}
        </p>
        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-foreground/60">{project.description}</p>
        <p className="mt-2 text-xs font-medium uppercase tracking-widest text-foreground/35">
          {project.stack}
        </p>
      </div>
    </Link>
  );
}
