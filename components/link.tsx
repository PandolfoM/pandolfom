import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function AppLink({
  href,
  children,
  target,
  className,
  showArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      target={target ? target : "_blank"}
      className={cn(
        "underline hover:no-underline expand-target cursor-none w-fit flex items-center gap-1 h-fit",
        className
      )}>
      {children} {showArrow && <ArrowUpRight size={16} />}
    </Link>
  );
}

export default AppLink;
