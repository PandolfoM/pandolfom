"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { EASE } from "@/components/reveal";

function MaskLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center pt-28 pb-16">
      {/* atmosphere */}
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute -inset-x-[50vw] -top-28 bottom-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-1/2 h-[60vh] w-[140vw] -translate-x-1/2 bg-[radial-gradient(ellipse_50%_80%_at_50%_0%,rgba(211,59,61,0.13),transparent_70%)]"
      />

      <div className="relative flex flex-col gap-10">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <span className="text-accent">●</span> Matthew Pandolfo — Portfolio
        </motion.p>

        <h1 className="font-display text-[clamp(2.6rem,8vw,6.25rem)] font-medium leading-[1.05] tracking-tight">
          <MaskLine delay={0.15}>Hello, I&apos;m Matthew —</MaskLine>
          <MaskLine delay={0.27}>
            I build{" "}
            <em className="font-light italic text-accent">fast, beautiful</em>
          </MaskLine>
          <MaskLine delay={0.39}>things for the web.</MaskLine>
        </h1>

        <motion.div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-white/40"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
        >
          <span>Frontend Developer</span>
          <span aria-hidden className="text-accent">
            /
          </span>
          <span>Rocky Hill, CT</span>
          <span aria-hidden className="text-accent">
            /
          </span>
          <span className="flex items-center gap-2">
            <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-accent" />
            Open to opportunities
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
        >
          <Button asChild>
            <a href="#projects">View my work</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/matthew-pandolfo.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>
        <span className="block h-12 w-px overflow-hidden bg-white/10">
          <span className="animate-scroll-line block h-full w-full bg-accent" />
        </span>
      </motion.div>
    </section>
  );
}

export default Hero;
