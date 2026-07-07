import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import DashboardMockup, { MockupVariant } from "@/components/ui/DashboardMockup";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, siteConfig } from "@/lib/data";

const pairedVariant: Record<MockupVariant, MockupVariant> = {
  analytics: "landing",
  landing: "analytics",
  portfolio: "agency",
  social: "commerce",
  agency: "portfolio",
  commerce: "social",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${siteConfig.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="bg-white px-6 pt-32 pb-12 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
            >
              <ArrowLeft size={15} />
              All Work
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="mt-6">
            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {project.name}
            </h1>
          </Reveal>

          {project.badge && (
            <Reveal delay={0.08} className="mt-4">
              <span className="inline-flex items-center rounded-full bg-foreground/5 px-4 py-1.5 text-sm font-medium text-foreground/70">
                {project.badge}
              </span>
            </Reveal>
          )}

          <div className="mt-12 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-24">
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/40">
                    Category
                  </p>
                  <p className="font-semibold">{project.category}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/40">
                    Stack
                  </p>
                  <p className="font-semibold">{project.stack}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/40">
                    GitHub
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-foreground/70 transition-colors hover:text-foreground"
                  >
                    View repo
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-xl text-lg leading-relaxed text-foreground/60">
                {project.summary}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div
              className={`aspect-[16/10] overflow-hidden rounded-[28px] bg-gradient-to-br ${project.gradient} p-4 shadow-2xl sm:p-8`}
            >
              <DashboardMockup
                variant={project.variant}
                accent={project.accent}
                label={project.stack}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="max-w-3xl text-sm font-medium uppercase tracking-widest text-foreground/40">
              A closer look
            </p>
          </Reveal>

          <StaggerContainer className="mt-6 grid gap-6 sm:grid-cols-2">
            <StaggerItem>
              <div
                className={`aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-4 shadow-xl`}
              >
                <DashboardMockup
                  variant={pairedVariant[project.variant]}
                  accent={project.accent}
                  label={project.stack}
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div
                className={`aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-4 shadow-xl`}
              >
                <DashboardMockup
                  variant={project.variant}
                  accent={project.accent}
                  label={project.stack}
                />
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-24">
            <Reveal>
              <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Built to solve a real problem, end to end.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <p className="max-w-2xl text-base leading-relaxed text-foreground/60">
                Every part of this build — from {project.stack.split(" · ")[0].toLowerCase()} fundamentals
                to the last integration test — was scoped, built, and
                validated solo, with an eye toward the same rigor expected on
                production systems.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-alt px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Keep exploring" title="More Projects" />

          <StaggerContainer className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
