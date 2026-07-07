"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: (delayChildren: number) => ({
    transition: { staggerChildren: 0.08, delayChildren },
  }),
};

const word = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const glossyWordStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle at 26% 18%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0) 65%), linear-gradient(160deg, #71717a 0%, #18181b 35%, #000000 70%, #000000 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  textShadow:
    "-3px -3px 0 #ddd6fe, -6px -6px 0 #f0abfc, -9px -9px 0 #818cf8, 8px 14px 14px rgba(0,0,0,0.35)",
};

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
  glossy?: boolean;
};

export default function AnimatedText({
  text,
  className,
  delay = 0,
  as = "h1",
  glossy = false,
}: AnimatedTextProps) {
  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={container}
        initial="hidden"
        animate="visible"
        custom={delay}
        aria-label={text}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className={`inline-block overflow-hidden pb-1 align-top ${
              i !== words.length - 1 ? "mr-[0.25em]" : ""
            }`}
          >
            <motion.span
              className="inline-block"
              variants={word}
              style={glossy ? glossyWordStyle : undefined}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
