"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-28 sm:px-10 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Capabilities" title="What I do" />

        <StaggerContainer className="mt-16 border-t border-foreground/10">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group grid cursor-default grid-cols-1 gap-3 border-b border-foreground/10 py-8 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-8"
              >
                <motion.h3
                  variants={{ rest: { x: 0 }, hover: { x: 12 } }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  {service.title}
                </motion.h3>
                <p className="text-sm font-medium uppercase tracking-wide text-foreground/50 sm:text-base">
                  {service.tags.join(" • ")}
                </p>
                <motion.span
                  variants={{
                    rest: { opacity: 0, scale: 0.6, rotate: -45 },
                    hover: { opacity: 1, scale: 1, rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background sm:flex"
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
