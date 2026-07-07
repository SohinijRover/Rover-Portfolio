"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { FourPointStar, LightningBolt } from "@/components/ui/Shapes";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

type SlotRect = { top: number; left: number; width: number; height: number };

export default function HeroAbout() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroSlotRef = useRef<HTMLDivElement>(null);
  const aboutSlotRef = useRef<HTMLDivElement>(null);

  const [base, setBase] = useState<SlotRect>({ top: 0, left: 0, width: 220, height: 251 });
  const [delta, setDelta] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    function measure() {
      const wrapper = wrapperRef.current;
      const heroSlot = heroSlotRef.current;
      const aboutSlot = aboutSlotRef.current;
      if (!wrapper || !heroSlot || !aboutSlot) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const heroRect = heroSlot.getBoundingClientRect();
      const aboutRect = aboutSlot.getBoundingClientRect();

      setBase({
        top: heroRect.top - wrapperRect.top,
        left: heroRect.left - wrapperRect.left,
        width: heroRect.width,
        height: heroRect.height,
      });
      setDelta({
        x: aboutRect.left - heroRect.left + (aboutRect.width - heroRect.width) / 2,
        y: aboutRect.top - heroRect.top,
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [0, delta.x]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, delta.y]);
  const imageRotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const imageFilter = useTransform(
    scrollYProgress,
    [0, 1],
    ["grayscale(1)", "grayscale(0)"]
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const starY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const boltY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={wrapperRef} className="relative">
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col bg-white pt-28 pb-8"
      >
        <div className="relative flex flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 sm:px-10">
            <motion.div style={{ opacity: textOpacity }} className="relative mx-auto w-fit">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-foreground/50"
              >
                Portfolio — Bangalore, IN
              </motion.p>

              <AnimatedText
                text={`${siteConfig.title.toUpperCase()}`}
                className="font-display text-center text-[13vw] font-bold leading-[0.95] tracking-tight text-black sm:text-[9vw] lg:text-[7vw]"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 text-center text-base font-medium text-foreground/50 sm:text-lg"
              >
                Android · Python · Embedded Automotive
              </motion.p>

              <motion.div
                style={{ y: starY }}
                initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-12 -top-12 sm:-left-24 sm:-top-20 lg:-left-28 lg:-top-24"
              >
                <motion.div
                  animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                  <FourPointStar className="h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
                </motion.div>
              </motion.div>

              <motion.div
                style={{ y: boltY }}
                initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-8 -bottom-8 sm:-right-16 sm:-bottom-14 lg:-right-20 lg:-bottom-16"
              >
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                  <LightningBolt className="h-16 w-16 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
                </motion.div>
              </motion.div>
            </motion.div>

            <div
              ref={heroSlotRef}
              className="invisible mx-auto mt-16 w-[220px] aspect-[7/8] sm:mt-14 sm:w-[300px]"
            />
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-7xl items-end justify-between px-6 text-xs font-medium text-black/60 sm:px-10 sm:text-sm">
            <span>©{siteConfig.copyrightYear}</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 6, 0] }}
              transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              className="hidden flex-col items-center gap-1 sm:flex"
            >
              <span className="h-8 w-px bg-black/20" />
            </motion.div>
            <span className="text-right uppercase tracking-widest">
              /Building since {siteConfig.foundedYear}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 sm:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_auto_0.95fr] lg:items-center lg:gap-14">
          <div>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
            >
              Hey!
            </motion.h2>

            <Reveal delay={0.1} className="mt-8">
              <p className="max-w-sm text-lg font-medium leading-snug tracking-tight text-balance">
                I&apos;m Sohini, a software engineer based in{" "}
                {siteConfig.location}, currently building system-level Android
                applications and automation tooling for automotive platforms
                at KPIT Technologies.
              </p>
            </Reveal>
          </div>

          <div
            ref={aboutSlotRef}
            className="invisible mx-auto w-[220px] aspect-[7/8] sm:w-[300px]"
          />

          <div className="max-w-md">
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-foreground/60">
                I work across the stack that ships inside cars — AOSP apps in
                Java and Kotlin, Python automation that keeps regression
                cycles honest, and Embedded C/C++ on instrument cluster HMIs.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-4">
              <p className="text-base leading-relaxed text-foreground/60">
                Lately I&apos;ve been applying LLMs and Python to time-series
                prediction, and I&apos;m especially interested in bringing
                this engineering background into healthcare technology.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="/contact">Get in touch</Button>
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-foreground/60 transition-colors hover:text-foreground"
                >
                  {social.label} ↗
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <motion.div
        style={{
          position: "absolute",
          top: base.top,
          left: base.left,
          width: base.width,
          height: base.height,
          x: imageX,
          y: imageY,
          rotateY: imageRotateY,
          filter: imageFilter,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="z-20 overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-bold text-white/90 sm:text-8xl">
            SJ
          </span>
        </div>
      </motion.div>
    </div>
  );
}
