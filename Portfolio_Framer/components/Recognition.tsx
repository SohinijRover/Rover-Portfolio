import { BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { recognitions } from "@/lib/data";

export default function Recognition() {
  return (
    <section className="bg-white px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Credentials" title="Recognition" />

        <StaggerContainer className="mt-16 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {recognitions.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-start gap-3 border-b border-foreground/10 pb-5">
                <BadgeCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground/40"
                />
                <p className="text-base font-medium leading-snug sm:text-lg">
                  {item}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
