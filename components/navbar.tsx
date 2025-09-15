"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-1/2 z-10 flex justify-center w-full pt-4 px-4 overscroll-contain -translate-x-1/2 max-w-[1200px]">
      <div className="flex items-center w-full h-14 p-4 overflow-hidden bg-gradient-to-t from-[rgba(9,9,9,0.7)] to-[rgba(17,17,17,0.9)] backdrop-blur-sm border border-[hsla(0,0%,100%,.06)] rounded-2xl shadow-navbar transition-[height] duration-300 ease-in-out will-change-auto lg:h-[76px]">
        <div className="flex items-center justify-between w-full relative">
          <Link
            href="/"
            className="flex text-sm items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
            <span className="w-1 h-1 bg-accent rounded-full"></span>
            <p className="text-xs text-white/50">Matthew Pandolfo</p>
          </Link>

          {/* icon */}
          <div
            className={cn(
              "relative w-6 h-4 cursor-pointer transition-all duration-500 ease-in-out translate-y-0 rotate-0 will-change-auto opacity-75 lg:hidden",
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
    </nav>
  );
}

export default Navbar;
