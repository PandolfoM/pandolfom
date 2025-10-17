"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Dot from "@/components/dot";
import { ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 z-10 flex justify-center w-full pt-4 px-4 overscroll-contain -translate-x-1/2 max-w-[1200px]",
        isOpen && "min-h-screen max-h-screen pb-6"
      )}>
      <div
        className={cn(
          "flex flex-col gap-4 items-start w-full h-16 p-4 overflow-hidden bg-gradient-to-t from-[rgba(9,9,9,0.7)] to-[rgba(17,17,17,0.9)] backdrop-blur-sm border border-[hsla(0,0%,100%,.06)] rounded-2xl shadow-navbar transition-[height] duration-300 ease-in-out will-change-auto lg:h-[76px]",
          isOpen && "h-64"
        )}>
        <div className="flex items-center justify-between w-full relative">
          <Link
            href="/"
            className="flex text-sm items-center gap-2 transition-all duration-300 ease-in-out magnetic-target cursor-none rounded-full p-2 hover:scale-105">
            <Dot />
            <p className="text-xs text-white/50">Matthew Pandolfo</p>
          </Link>

          <div className="flex items-center gap-2">
            <Button size="xs" variant="outline">
              Contact Me
            </Button>
            {/* icon */}
            <div
              className={cn(
                "relative w-5 h-5 transition-all duration-500 ease-in-out translate-y-0 rotate-0 will-change-auto opacity-75 expand-target expand m-2 aspect-square lg:hidden",
                isOpen && "rotate-180"
              )}
              onClick={toggleMenu}>
              <div
                className={cn(
                  "top-[10%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                  isOpen && "top-[50%] -rotate-45"
                )}></div>
              <div
                className={cn(
                  "top-[50%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                  isOpen && "opacity-0"
                )}></div>
              <div
                className={cn(
                  "top-[90%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                  isOpen && "top-[50%] rotate-45"
                )}></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-5 w-full select-none p-2 lg:hidden">
          <Button
            size="xs"
            variant="link"
            className="text-sm text-white/50 expand-target cursor-none w-fit flex items-center gap-1">
            About
          </Button>
          <Button
            size="xs"
            variant="link"
            className="text-sm text-white/50 expand-target cursor-none w-fit flex items-center gap-1">
            Experience
          </Button>
          <Button
            size="xs"
            variant="link"
            className="text-sm text-white/50 expand-target cursor-none w-fit flex items-center gap-1">
            Projects
          </Button>
          <Button
            size="xs"
            variant="link"
            className="text-sm text-white/50 expand-target cursor-none w-fit flex items-center gap-1">
            Contact
          </Button>
          <Button
            size="xs"
            variant="link"
            className="text-sm text-white/50 expand-target cursor-none w-fit flex items-center gap-1">
            Resume <ArrowUpRight size={16} />
          </Button>
          <Button
            size="xs"
            variant="link"
            className="text-sm text-white/50 expand-target cursor-none w-fit flex items-center gap-1">
            LinkedIn <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
