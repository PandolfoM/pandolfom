"use client";

import Hero from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import AppLink from "@/components/link";
import { useEffect, useState } from "react";

import me from "@/app/assets/me.png";
import backupData from "@/app/assets/data.json";

type DataProps = {
  about: string;
  experience: Array<{
    company: string;
    role: string;
    location: string;
    endYear: string | null;
  }>;
  projects: Array<{
    name: string;
    description: string;
    link: string;
  }>;
};

export default function Home() {
  const [data, setData] = useState<DataProps | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://wurqoidrztwyxhabvdlf.supabase.co/storage/v1/object/public/mjp-public/Portfolio/portfolio.json"
        );
        const result = await response.json();
        setData(result);
      } catch (e) {
        setData(backupData);
        console.error("Failed to fetch:", e);
      }
    };

    getData();
  }, []);

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
            <p>{data?.about}</p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader className="flex items-center">
            <CardTitle className="flex items-center">Experience</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {data?.experience.map((exp, i) => (
              <div className="grid grid-cols-3" key={i}>
                {exp.endYear ? (
                  <p className="text-sm text-white/50">{exp.endYear}</p>
                ) : (
                  <Badge>Present</Badge>
                )}

                <div className="col-span-2">
                  <p>{exp.role}</p>
                  <p>{exp.company}</p>
                  <p className="opacity-50">{exp.location}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader className="flex items-center">
            <CardTitle className="flex items-center">Projects</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {data?.projects.map((proj, i) => (
              <div className="flex flex-col gap-1" key={i}>
                <AppLink href={proj.link}>{proj.name}</AppLink>
                <p className="text-white/50">{proj.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
