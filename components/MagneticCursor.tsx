"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
// List of selectors for magnetic targets
const MAGNETIC_SELECTORS = [".magnetic-target"];
const ICON_SELECTORS = [".expand-target"];

const MagneticCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<"expand" | "active" | "inactive">(
    "inactive"
  );
  const [isMobile, setIsMobile] = useState(false);
  const [rounded, setRounded] = useState("rounded-full");

  useEffect(() => {
    // Basic mobile detection (user agent)
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const ua = navigator.userAgent;
        setIsMobile(
          /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            ua
          )
        );
      }
    };
    checkMobile();
  }, []);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorWidth = useMotionValue(32);
  const cursorHeight = useMotionValue(32);
  const cursorRadius = useMotionValue(16);
  const springX = useSpring(mouseX, { stiffness: 2000, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 2000, damping: 40 });
  const springWidth = useSpring(cursorWidth, { stiffness: 2000, damping: 40 });
  const springHeight = useSpring(cursorHeight, {
    stiffness: 2000,
    damping: 40,
  });
  // const springRadius = useSpring(cursorRadius, {
  //   stiffness: 2000,
  //   damping: 40,
  // });

  useEffect(() => {
    if (isMobile) return;
    const moveCursor = (e: MouseEvent) => {
      let target = null;
      let iconTarget = null;
      for (const selector of MAGNETIC_SELECTORS) {
        target = (e.target as HTMLElement).closest(selector);
        if (target) break;
      }
      for (const selector of ICON_SELECTORS) {
        iconTarget = (e.target as HTMLElement).closest(selector);
        if (iconTarget) break;
      }
      if (iconTarget) {
        const rect = iconTarget.getBoundingClientRect();
        const newWidth = rect.width + 15;
        const newHeight = rect.height + 15;
        setRounded(getRoundedClass(iconTarget as HTMLElement));
        cursorWidth.set(newWidth);
        cursorHeight.set(newHeight);
        cursorRadius.set(Math.max(newWidth, newHeight) / 2);
        mouseX.set(rect.left + rect.width / 2 - newWidth / 2);
        mouseY.set(rect.top + rect.height / 2 - newHeight / 2);
        setIsActive("expand");
      } else if (target) {
        const rect = target.getBoundingClientRect();
        cursorWidth.set(rect.width);
        cursorHeight.set(rect.height);
        setRounded(getRoundedClass(target as HTMLElement));
        const computedRadius = window.getComputedStyle(target).borderRadius;
        let radiusValue = 0;
        if (computedRadius.endsWith("px")) {
          radiusValue = parseFloat(computedRadius);
        } else if (computedRadius.endsWith("%")) {
          radiusValue =
            Math.max(rect.width, rect.height) *
            (parseFloat(computedRadius) / 100);
        } else {
          radiusValue = Math.max(rect.width, rect.height) / 2;
        }
        cursorRadius.set(radiusValue);
        mouseX.set(rect.left + rect.width / 2 - rect.width / 2);
        mouseY.set(rect.top + rect.height / 2 - rect.height / 2);
        setIsActive("active");
      } else {
        cursorWidth.set(23);
        cursorHeight.set(23);
        cursorRadius.set(16);
        mouseX.set(e.clientX - 16);
        mouseY.set(e.clientY - 16);
        setRounded("rounded-full");
        setIsActive("inactive");
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorHeight, cursorRadius, cursorWidth, mouseX, mouseY, isMobile]);

  const getRoundedClass = (el: HTMLElement | null): string => {
    if (!el) return "rounded-full";
    const classList = Array.from(el.classList);
    const rounded = classList.find((cls) => cls.startsWith("rounded"));
    return rounded || "rounded-full";
  };

  if (isMobile) return null;
  return (
    <motion.div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 pointer-events-none z-[999999999999999] transition-all transform-[-50%, -50%] border-2 border-solid",
        rounded,
        isActive === "expand"
          ? "bg-accent/30 border-accent"
          : isActive === "active"
            ? "bg-accent/10 border-accent"
            : "bg-accent border-none shadow-[0_0_5px_0] shadow-background"
      )}
      style={{
        x: springX,
        y: springY,
        width: springWidth,
        height: springHeight,
        // borderRadius: springRadius,
        transition: "background 0.2s, border 0.2s",
      }}
    />
  );
};

export default MagneticCursor;
