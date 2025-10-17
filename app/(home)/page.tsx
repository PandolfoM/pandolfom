"use client";

import Hero from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import me from "@/app/assets/me.png";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col h-dvh gap-5 pt-[172px] ">
        <Hero />
      </div>
      <section className="flex flex-col gap-8">
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

        {/* Experience */}
        <Card>
          <CardHeader className="flex items-center">
            <CardTitle className="flex items-center">Experience</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="grid grid-cols-3">
              <Badge>Present</Badge>
              <div className="col-span-2">
                <p>Frontend Developer</p>
                <p>Avid Marketing Group</p>
                <p className="opacity-50">Rocky Hill, Connecticut</p>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <p className="text-sm text-white/50">2023</p>
              <div className="col-span-2">
                <p>Cashier</p>
                <p>West Side Marketplace</p>
                <p className="opacity-50">Rocky Hill, Connecticut</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
