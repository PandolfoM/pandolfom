"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
// List of selectors for magnetic targets
const MAGNETIC_SELECTORS = [".magnetic-target"];
const EXPAND_SELECTORS = [".expand-target"];

const MagneticCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<"expand" | "active" | "inactive">(
    "inactive"
  );
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
  const springRadius = useSpring(cursorRadius, {
    stiffness: 2000,
    damping: 40,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      let target = null;
      let expandTarget = null;
      for (const selector of MAGNETIC_SELECTORS) {
        target = (e.target as HTMLElement).closest(selector);
        if (target) break;
      }
      for (const selector of EXPAND_SELECTORS) {
        expandTarget = (e.target as HTMLElement).closest(selector);
        if (expandTarget) break;
      }
      if (expandTarget) {
        const rect = expandTarget.getBoundingClientRect();
        // Expand cursor to fixed size and make it transparent
        cursorWidth.set(48);
        cursorHeight.set(48);
        cursorRadius.set(24);
        mouseX.set(rect.left + rect.width / 2 - 24);
        mouseY.set(rect.top + rect.height / 2 - 24);
        setIsActive("expand");
      } else if (target) {
        const rect = target.getBoundingClientRect();
        // Morph cursor to target's shape and size
        cursorWidth.set(rect.width);
        cursorHeight.set(rect.height);
        // Detect border radius from computed style
        const computedRadius = window.getComputedStyle(target).borderRadius;
        // Try to parse as pixel value, fallback to circle if not
        let radiusValue = 0;
        if (computedRadius.endsWith("px")) {
          radiusValue = parseFloat(computedRadius);
        } else if (computedRadius.endsWith("%")) {
          // If percent, use percent of max dimension
          radiusValue =
            Math.max(rect.width, rect.height) *
            (parseFloat(computedRadius) / 100);
        } else {
          // Fallback to circle
          radiusValue = Math.max(rect.width, rect.height) / 2;
        }
        cursorRadius.set(radiusValue);
        // Snap cursor to center of target, offset by half cursor size
        mouseX.set(rect.left + rect.width / 2 - rect.width / 2);
        mouseY.set(rect.top + rect.height / 2 - rect.height / 2);
        setIsActive("active");
      } else {
        cursorWidth.set(23);
        cursorHeight.set(23);
        cursorRadius.set(16);
        // Snap cursor to mouse, offset by half default size
        mouseX.set(e.clientX - 16);
        mouseY.set(e.clientY - 16);
        setIsActive("inactive");
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 pointer-events-none z-50 transition-all transform-[-50%, -50%] border-2 border-solid",
        isActive === "expand"
          ? "bg-accent/30 border-accent"
          : isActive === "active"
          ? "bg-accent/10 border-accent"
          : "bg-accent border-none"
      )}
      style={{
        x: springX,
        y: springY,
        width: springWidth,
        height: springHeight,
        borderRadius: springRadius,
        transition: "background 0.2s, border 0.2s",
      }}
    />
  );
};

export default MagneticCursor;
