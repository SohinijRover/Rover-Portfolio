import React, { useEffect, useRef, useState } from "react";

/* ============================================================
   SOHINI JOARDER — EDITORIAL PORTFOLIO
   ------------------------------------------------------------
   Structure: Nav · Hero · Signal Marquee · About · Capabilities
              · Experience · Projects · Recognition · Contact · Footer
   All content lives in the DATA object below — edit freely.
   Palette: cool paper (#EDEEEA), ink (#121310), signal orange (#FF3E00)
   Type:    Anton (display) · Instrument Sans (body) · JetBrains Mono (labels)
   ============================================================ */

const DATA = {
  name: "SOHINI",
  fullName: "Sohini Joarder",
  role: ["SOFTWARE", "ENGINEER"],
  year: "©2026",
  location: "BANGALORE, IN",
  tagline: "Android · Python · Embedded Automotive",
  marquee:
    "/BUILDING SINCE 2020 — ANDROID — PYTHON — EMBEDDED C — AUTOMOTIVE HMI — LLMs —",
  email: "sohini.joarder02@gmail.com",
  phone: "+91 8697087952",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/sohinijoarder" },
    { label: "GitHub", href: "https://github.com/SohinijRover" },
  ],
  bio: {
    greeting: "Hey!",
    paragraphs: [
      "I'm Sohini, a software engineer based in Bangalore, currently building system-level Android applications and automation tooling for automotive platforms at KPIT Technologies.",
      "I work across the stack that ships inside cars — AOSP apps in Java and Kotlin, Python automation that keeps regression cycles honest, and Embedded C/C++ on instrument cluster HMIs.",
      "Lately I've been applying LLMs and Python to time-series prediction, and I'm especially interested in bringing this engineering background into healthcare technology.",
    ],
  },
  capabilities: [
    {
      title: "Android Development",
      items: ["AOSP system apps", "Java / Kotlin", "IVI platforms"],
    },
    {
      title: "Python Engineering",
      items: ["Automation & tooling", "Flask / FastAPI / Django", "PyTest & unittest"],
    },
    {
      title: "Embedded & HMI",
      items: ["Embedded C / C++", "Instrument clusters", "Validation tooling"],
    },
    {
      title: "Data & ML",
      items: ["Hugging Face / LangChain", "pandas / scikit-learn", "Tableau / Power BI"],
    },
  ],
  experience: [
    {
      company: "KPIT Technologies",
      role: "Software Engineer — Honda IVI",
      period: "2024 — Now",
      detail:
        "System-level Android apps (Phone, Home launcher) across the AOSP codebase. Ported features across two Android versions, resolved production defects, and built Python regression automation that cut manual test cycles across infotainment variants.",
    },
    {
      company: "KPIT Technologies",
      role: "HMI Engineer — Denso Cluster",
      period: "2024 — 2025",
      detail:
        "Built and validated HMI components for an automotive instrument cluster in Embedded C/C++, and wrote Python tools for log parsing, report generation, and test setup that meaningfully cut regression turnaround.",
    },
    {
      company: "Indus Net Technologies",
      role: "Data Analyst Intern",
      period: "2023",
      detail:
        "Analyzed business datasets in SQL, built Tableau and Power BI dashboards, and presented insights to non-technical stakeholders.",
    },
  ],
  projects: [
    {
      index: "01",
      title: "Stock Market Predictor",
      tags: "Python · Flask · Hugging Face · React",
      detail:
        "Prediction tool combining OHLC price history with sentiment from financial news via a fine-tuned LLM. Flask REST API with SQLite caching, multi-process batched inference, PyTest coverage, and a React dashboard for backtested results.",
    },
    {
      index: "02",
      title: "SIGN-ify Gloves",
      tags: "Embedded Python · Sensors",
      detail:
        "Wearable gloves with flex sensors that translate hand gestures into text and synthesized speech through an embedded Python pipeline on a microcontroller bridge.",
    },
    {
      index: "03",
      title: "6-DOF Autonomous Arm",
      tags: "ROS · Python · OpenCV — Flipkart Grid 5.0 National Finalist",
      detail:
        "Six-degree-of-freedom robotic arm with inverse kinematics for autonomous pick-and-place, plus OpenCV object detection. Reached the national finals of Flipkart Grid 5.0.",
    },
    {
      index: "04",
      title: "Life X Lane",
      tags: "IoT · Computer Vision · YOLO",
      detail:
        "Smart traffic prototype that detects emergency vehicles with sensor data and YOLO-based vision, then preempts signals at intersections to clear their path.",
    },
  ],
  recognition: [
    "National Finalist — Flipkart Grid 5.0 Robotics Challenge",
    "B.Tech CSE, KIIT — CGPA 9.12 / 10",
    "Microsoft Technology Associate — Python",
    "Cryptography & Information Theory — University of Michigan",
    "Data Structures & Algorithms — UC San Diego",
    "HackerRank — Java · Python · SQL · Problem Solving",
    "30 Days of GCP — Google Cloud",
    "Web & Tech Director — TEDxKIIT '23 & '24",
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

/* ---------- global styles ---------- */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
      --paper: #EDEEEA;
      --ink: #121310;
      --signal: #FF3E00;
      --graphite: #5A5D54;
      --line: rgba(18,19,16,0.14);
    }

    .sj-root {
      background: var(--paper);
      color: var(--ink);
      font-family: 'Instrument Sans', system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .sj-display { font-family: 'Anton', Impact, sans-serif; letter-spacing: 0.01em; }
    .sj-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

    /* marquee */
    @keyframes sj-marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .sj-marquee-track {
      display: inline-flex;
      white-space: nowrap;
      animation: sj-marquee 28s linear infinite;
      will-change: transform;
    }

    /* reveal on scroll */
    .sj-reveal {
      opacity: 0;
      transform: translateY(26px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .sj-reveal.sj-in { opacity: 1; transform: none; }

    /* project rows */
    .sj-row { transition: background 0.25s ease, color 0.25s ease; }
    .sj-row:hover { background: var(--ink); color: var(--paper); }
    .sj-row:hover .sj-row-index { color: var(--signal); }
    .sj-row-detail {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.4s ease;
    }
    .sj-row.sj-open .sj-row-detail { grid-template-rows: 1fr; }

    a:focus-visible, button:focus-visible {
      outline: 2px solid var(--signal);
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      .sj-marquee-track { animation: none; }
      .sj-reveal { opacity: 1; transform: none; transition: none; }
      .sj-row, .sj-row-detail { transition: none; }
      html { scroll-behavior: auto; }
    }
  `}</style>
);

/* ---------- reveal hook ---------- */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("sj-in")),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`sj-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ---------- sections ---------- */

const Nav = () => (
  <header
    className="fixed top-0 left-0 right-0 z-50 border-b"
    style={{ background: "rgba(237,238,234,0.85)", backdropFilter: "blur(8px)", borderColor: "var(--line)" }}
  >
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
      <a href="#top" className="sj-display text-xl tracking-wide">
        {DATA.name}<span style={{ color: "var(--signal)" }}>.</span>
      </a>
      <div className="hidden sm:flex gap-7">
        {DATA.navLinks.map((l) => (
          <a key={l.href} href={l.href} className="sj-mono text-xs uppercase tracking-widest hover:opacity-60">
            {l.label}
          </a>
        ))}
      </div>
      <a
        href={`mailto:${DATA.email}`}
        className="sj-mono text-xs uppercase tracking-widest px-4 py-2 border"
        style={{ borderColor: "var(--ink)" }}
      >
        Say hi
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <section id="top" className="pt-32 pb-14 px-5">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="sj-mono text-xs uppercase tracking-widest mb-6" style={{ color: "var(--graphite)" }}>
          Portfolio — {DATA.location}
        </p>
      </Reveal>
      <h1 className="sj-display uppercase leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)" }}>
        <Reveal><span className="block">{DATA.role[0]}</span></Reveal>
        <Reveal delay={120}>
          <span className="block" style={{ color: "var(--signal)" }}>{DATA.role[1]}</span>
        </Reveal>
      </h1>
      <Reveal delay={240}>
        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4 border-t pt-5" style={{ borderColor: "var(--line)" }}>
          <p className="text-lg" style={{ color: "var(--graphite)" }}>{DATA.tagline}</p>
          <p className="sj-display text-2xl">{DATA.year}</p>
        </div>
      </Reveal>
    </div>
  </section>
);

const Marquee = ({ inverted = false }) => (
  <div
    className="overflow-hidden py-3 border-y"
    style={{
      background: inverted ? "var(--ink)" : "var(--signal)",
      color: inverted ? "var(--signal)" : "var(--ink)",
      borderColor: "var(--ink)",
    }}
    aria-hidden="true"
  >
    <div className="sj-marquee-track sj-mono text-sm uppercase tracking-widest">
      <span className="pr-4">{DATA.marquee.repeat(3)}</span>
      <span className="pr-4">{DATA.marquee.repeat(3)}</span>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="px-5 py-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
      <Reveal className="md:col-span-4">
        <h2 className="sj-display text-6xl">{DATA.bio.greeting}</h2>
      </Reveal>
      <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
        {DATA.bio.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 100}><p>{p}</p></Reveal>
        ))}
        <Reveal delay={300}>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`mailto:${DATA.email}`}
              className="sj-mono text-xs uppercase tracking-widest px-6 py-3"
              style={{ background: "var(--ink)", color: "var(--paper)" }}
            >
              Get in touch
            </a>
            {DATA.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="sj-mono text-xs uppercase tracking-widest px-6 py-3 border"
                style={{ borderColor: "var(--ink)" }}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="px-5 pb-24">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="sj-mono text-xs uppercase tracking-widest mb-8" style={{ color: "var(--graphite)" }}>
          /What I do
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l" style={{ borderColor: "var(--line)" }}>
        {DATA.capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <div className="border-b border-r p-6 h-full" style={{ borderColor: "var(--line)" }}>
              <h3 className="sj-display text-2xl uppercase mb-5 leading-tight">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="sj-mono text-xs uppercase tracking-wide" style={{ color: "var(--graphite)" }}>
                    — {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="px-5 pb-24">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="sj-mono text-xs uppercase tracking-widest mb-8" style={{ color: "var(--graphite)" }}>
          /Experience
        </p>
      </Reveal>
      <div className="border-t" style={{ borderColor: "var(--line)" }}>
        {DATA.experience.map((e, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="grid md:grid-cols-12 gap-3 py-8 border-b" style={{ borderColor: "var(--line)" }}>
              <p className="sj-mono text-xs uppercase tracking-widest md:col-span-2" style={{ color: "var(--signal)" }}>
                {e.period}
              </p>
              <div className="md:col-span-4">
                <h3 className="sj-display text-2xl uppercase leading-tight">{e.company}</h3>
                <p className="sj-mono text-xs uppercase tracking-wide mt-1" style={{ color: "var(--graphite)" }}>
                  {e.role}
                </p>
              </div>
              <p className="md:col-span-6 leading-relaxed" style={{ color: "var(--graphite)" }}>
                {e.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="work" className="px-5 pb-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-baseline justify-between mb-8">
            <p className="sj-mono text-xs uppercase tracking-widest" style={{ color: "var(--graphite)" }}>
              /Featured projects
            </p>
            <a
              href={DATA.socials[1].href}
              target="_blank"
              rel="noreferrer"
              className="sj-mono text-xs uppercase tracking-widest underline underline-offset-4"
            >
              View GitHub ↗
            </a>
          </div>
        </Reveal>
        <div className="border-t" style={{ borderColor: "var(--line)" }}>
          {DATA.projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={p.index} delay={i * 60}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`sj-row w-full text-left border-b px-2 ${isOpen ? "sj-open" : ""}`}
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-7">
                    <span className="sj-row-index sj-mono text-sm" style={{ color: "var(--graphite)" }}>
                      {p.index}
                    </span>
                    <span className="sj-display uppercase leading-none" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
                      {p.title}
                    </span>
                    <span className="sj-mono text-xs uppercase tracking-wide ml-auto opacity-70">
                      {p.tags}
                    </span>
                  </div>
                  <div className="sj-row-detail">
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-7 leading-relaxed opacity-80">{p.detail}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Recognition = () => (
  <section className="px-5 pb-24">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="sj-mono text-xs uppercase tracking-widest mb-8" style={{ color: "var(--graphite)" }}>
          /Recognition
        </p>
      </Reveal>
      <div className="flex flex-wrap gap-3">
        {DATA.recognition.map((r, i) => (
          <Reveal key={r} delay={i * 50}>
            <span className="inline-block sj-mono text-xs uppercase tracking-wide border px-4 py-2" style={{ borderColor: "var(--ink)" }}>
              {r}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="px-5 py-24" style={{ background: "var(--ink)", color: "var(--paper)" }}>
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <h2 className="sj-display uppercase leading-none" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
          Let's talk<span style={{ color: "var(--signal)" }}>.</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 max-w-xl text-lg opacity-70">
          Open to software engineering roles and interesting problems — especially where
          embedded systems, Android, or ML meet the real world.
        </p>
      </Reveal>
      <Reveal delay={220}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${DATA.email}`}
            className="sj-mono text-xs uppercase tracking-widest px-6 py-3"
            style={{ background: "var(--signal)", color: "var(--ink)" }}
          >
            {DATA.email}
          </a>
          {DATA.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="sj-mono text-xs uppercase tracking-widest px-6 py-3 border"
              style={{ borderColor: "var(--paper)" }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-5 pt-16 pb-8" style={{ background: "var(--ink)", color: "var(--paper)" }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 border-t pt-10" style={{ borderColor: "rgba(237,238,234,0.15)" }}>
        <div className="md:col-span-6">
          <p className="sj-mono text-xs uppercase tracking-widest mb-3 opacity-50">/Quick links</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {DATA.navLinks.map((l) => (
              <a key={l.href} href={l.href} className="sj-mono text-xs uppercase tracking-widest hover:opacity-60">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="sj-mono text-xs uppercase tracking-widest mb-3 opacity-50">/Contact</p>
          <a href={`mailto:${DATA.email}`} className="sj-mono text-xs uppercase tracking-widest hover:opacity-60">
            {DATA.email}
          </a>
        </div>
      </div>
      <p
        className="sj-display uppercase text-center mt-14 leading-none select-none"
        style={{ fontSize: "clamp(4rem, 22vw, 18rem)", color: "rgba(237,238,234,0.08)" }}
        aria-hidden="true"
      >
        {DATA.name}
      </p>
      <p className="sj-mono text-[10px] uppercase tracking-widest text-center opacity-40 mt-4">
        {DATA.year} {DATA.fullName} — Built with React
      </p>
    </div>
  </footer>
);

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = "");
  }, []);

  return (
    <div className="sj-root min-h-screen">
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <Marquee inverted />
        <Experience />
        <Projects />
        <Recognition />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
