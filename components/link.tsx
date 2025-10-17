import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

function AppLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="underline hover:no-underline expand-target cursor-none w-fit flex items-center gap-1 h-fit">
      {children} <ArrowUpRight size={16} />
    </Link>
  );
}

export default AppLink;
