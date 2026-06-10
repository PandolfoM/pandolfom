"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Dot from "@/components/dot";
import AppLink from "./link";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const router = useRouter();

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 z-50 flex justify-center w-full pt-4 px-4 overscroll-contain -translate-x-1/2 max-w-[1200px]",
        isOpen && "min-h-screen max-h-screen pb-6"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4 items-start w-full h-16 p-4 overflow-hidden bg-gradient-to-t from-[rgba(9,9,9,0.75)] to-[rgba(17,17,17,0.9)] backdrop-blur-md border border-white/[0.07] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-[height] duration-300 ease-in-out will-change-auto lg:h-[72px] lg:justify-center",
          isOpen && "h-64"
        )}
      >
        <div className="flex items-center justify-between w-full relative">
          <Link
            href="/"
            className="flex text-sm items-center gap-2 transition-all duration-300 ease-in-out magnetic-target cursor-none rounded-full p-2 hover:scale-105"
          >
            <Dot className="animate-pulse-dot" />
            <p className="text-xs text-white/50 tracking-tight lg:text-sm">
              Matthew Pandolfo
            </p>
          </Link>

          {/* desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="expand-target cursor-none rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="xs"
              variant="outline"
              className="lg:text-sm lg:h-7"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </Button>
            {/* icon */}
            <div
              className={cn(
                "relative w-5 h-5 transition-all duration-500 ease-in-out translate-y-0 rotate-0 will-change-auto opacity-75 expand-target expand m-2 aspect-square lg:hidden",
                isOpen && "rotate-180"
              )}
              onClick={toggleMenu}
            >
              <div
                className={cn(
                  "top-[10%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                  isOpen && "top-[50%] -rotate-45"
                )}
              ></div>
              <div
                className={cn(
                  "top-[50%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                  isOpen && "opacity-0"
                )}
              ></div>
              <div
                className={cn(
                  "top-[90%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                  isOpen && "top-[50%] rotate-45"
                )}
              ></div>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-5 w-full select-none p-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-white/50 expand-target cursor-none w-fit flex items-center gap-1"
            >
              {link.label}
            </a>
          ))}
          <AppLink
            className="text-white/50 text-sm"
            href="/matthew-pandolfo.pdf"
          >
            Resume
          </AppLink>
          <AppLink
            className="text-white/50 text-sm"
            href="https://www.linkedin.com/in/matthew-pandolfo/"
          >
            LinkedIn
          </AppLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
