import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="bg-background-alt px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          action={<Button href="/work" variant="outline">View All Work</Button>}
        />

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
