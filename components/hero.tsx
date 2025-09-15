import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-5xl/snug font-bold">
        Hello
        <br />
        I&apos;m{" "}
        <span className="text-accent">
          Matthew
          <br /> Pandolfo
        </span>
      </h1>
      <div className="flex gap-2.5 flex-wrap">
        <Badge variant="outline">Frontend Developer</Badge>
        <Badge variant="outline">Junior Dev</Badge>
        <Badge variant="outline">Rocky Hill, CT</Badge>
      </div>
      <div className="flex gap-2.5 flex-wrap">
        <Button>Learn More</Button>
        <Button
          variant="outline"
          onClick={() => window.open("/matthew-pandolfo.pdf", "_blank")}>
          Resume
        </Button>
      </div>
    </section>
  );
}

export default Hero;
