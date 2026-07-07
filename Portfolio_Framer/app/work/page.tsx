import type { Metadata } from "next";
import WorkGrid from "@/components/work/WorkGrid";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Work — ${siteConfig.name}`,
  description: `Selected projects by ${siteConfig.name}, a ${siteConfig.title}.`,
};

export default function WorkPage() {
  return <WorkGrid />;
}
