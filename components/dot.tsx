import { cn } from "@/lib/utils";
import React from "react";

function Dot({ className }: { className?: string }) {
  return (
    <span className={cn("w-1 h-1 bg-accent rounded-full", className)}></span>
  );
}

export default Dot;
