import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-8 flex-1">
        <h1 className="text-5xl/snug font-bold tracking-tight">
          Hello
          <br />
          I&apos;m{" "}
          <span className="text-accent">
            Matthew
            <br /> Pandolfo
          </span>
        </h1>
        <div className="flex gap-2.5 flex-wrap">
          <Badge variant="outline">Frontend Developer</Badge>
          <Badge variant="outline">Junior Dev</Badge>
          <Badge variant="outline">Rocky Hill, CT</Badge>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          <Button>Learn More</Button>
          <Button
            variant="outline"
            onClick={() => window.open("/matthew-pandolfo.pdf", "_blank")}>
            Resume
          </Button>
        </div>
      </div>
      <div className="relative pb-2">
        <motion.div
          className="w-full h-8 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ opacity: [0.05, 0.15, 0.5, 0.015, 0.05, 0.05, 0.05] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <SVG />
        </motion.div>
        <motion.div
          className="w-full h-8"
          animate={{ opacity: [0.05, 0.05, 0.15, 0.5, 0.15, 0.05, 0.05] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <SVG />
        </motion.div>
        <motion.div
          className="w-full h-8 absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          animate={{ opacity: [0.05, 0.05, 0.05, 0.15, 0.5, 0.15, 0.05] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <SVG />
        </motion.div>
        <motion.div
          className="w-full h-8"
          animate={{
            opacity: [
              0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.15, 0.5, 0.15, 0.05,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <SVG />
        </motion.div>
      </div>
    </section>
  );
}

function SVG({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-full h-full", className)}
      viewBox="0 0 100 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 9 L50 21 L94 9" />
    </svg>
  );
}

export default Hero;
