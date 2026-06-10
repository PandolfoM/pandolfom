import React from "react";
import Dot from "@/components/dot";

function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-2 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="flex items-center gap-2 text-sm text-white/40">
          <Dot /> © {new Date().getFullYear()} Matthew Pandolfo
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
          Designed &amp; built by hand — Rocky Hill, CT
        </p>
      </div>
      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-display text-[18vw] font-medium leading-[0.7] tracking-tight text-white/[0.04] translate-y-[30%]"
      >
        PANDOLFO
      </p>
    </footer>
  );
}

export default Footer;
