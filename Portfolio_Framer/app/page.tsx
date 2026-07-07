import HeroAbout from "@/components/HeroAbout";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <HeroAbout />
      <Marquee />
      <Services />
      <Marquee />
      <Experience />
      <Projects />
      <Recognition />
      <CTA />
    </>
  );
}
