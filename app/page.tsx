"use client";

import Hero from "@/components/hero";
import ParallaxCards from "@/components/parallaxCards";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ParallaxCards />
    </div>
  );
}
