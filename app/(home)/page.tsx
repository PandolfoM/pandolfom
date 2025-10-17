"use client";

import Hero from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import me from "@/app/assets/me.png";

export default function Home() {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col h-dvh gap-5 pt-[172px] ">
        <Hero />
      </div>
      <section>
        {/* About */}
        <Card>
          <CardHeader className="flex items-center">
            <CardTitle className="flex items-center gap-2.5">
              <Image src={me} alt="matthew pandolfo" width={40} />
              About
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Hey, I&apos;m Matt! I&apos;m a web developer from Rocky Hill, CT
              who loves building modern, user-friendly websites and
              experimenting with the latest tools and technologies. I&apos;m
              passionate about creating meaningful digital experiences that
              blend creativity, functionality, and great design.
            </p>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
