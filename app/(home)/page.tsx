"use client";

import Hero from "@/components/hero";
import Reveal from "@/components/reveal";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
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

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-12 flex items-center gap-5 md:mb-16">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>
    </Reveal>
  );
}

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
    <div className="flex flex-col gap-28 md:gap-40">
      <Hero />

      {/* About */}
      <section id="about" className="scroll-mt-28">
        <SectionHeading index="01" title="About" />
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal delay={0.1}>
            <div className="flex items-start gap-5 md:flex-col">
              <div className="group relative w-24 shrink-0 md:w-40">
                <div className="absolute -inset-2 rounded-2xl border border-accent/30 transition-transform duration-500 group-hover:rotate-3" />
                <Image
                  src={me}
                  alt="Matthew Pandolfo"
                  className="relative w-full rounded-xl transition-transform duration-500 group-hover:-rotate-2"
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 md:mt-2">
                Matt Pandolfo
                <br />
                Rocky Hill, CT
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            {data ? (
              <p className="max-w-[42ch] text-xl leading-relaxed text-white/80 md:text-2xl">
                {data.about}
              </p>
            ) : (
              <div className="space-y-3">
                <Skeleton className="h-6 w-full rounded-full" />
                <Skeleton className="h-6 w-full rounded-full" />
                <Skeleton className="h-6 w-5/6 rounded-full" />
                <Skeleton className="h-6 w-2/3 rounded-full" />
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-28">
        <SectionHeading index="02" title="Experience" />
        <div className="relative ml-1 flex flex-col gap-12 border-l border-white/10 pl-8 md:pl-12">
          {data ? (
            data.experience.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <span
                    className={`absolute -left-[37px] top-1.5 size-2.5 rounded-full md:-left-[53px] ${
                      exp.endYear ? "bg-white/20" : "bg-accent"
                    }`}
                  />
                  <div className="flex flex-col gap-1">
                    {exp.endYear ? (
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                        — {exp.endYear}
                      </p>
                    ) : (
                      <Badge className="font-mono text-[10px] uppercase tracking-[0.15em]">
                        Present
                      </Badge>
                    )}
                    <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-white/70">{exp.company}</p>
                    <p className="text-sm text-white/40">{exp.location}</p>
                  </div>
                </div>
              </Reveal>
            ))
          ) : (
            <div className="space-y-4">
              <Skeleton className="h-5 w-24 rounded-full" />
              <Skeleton className="h-7 w-64 rounded-full" />
              <Skeleton className="h-5 w-48 rounded-full" />
              <Skeleton className="h-5 w-40 rounded-full" />
            </div>
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-28">
        <SectionHeading index="03" title="Projects" />
        <div className="flex flex-col border-t border-white/10">
          {data ? (
            data.projects.map((proj, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link
                  href={proj.link}
                  target="_blank"
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-white/10 py-7 transition-all duration-300 hover:border-accent/50 hover:pl-3 expand-target cursor-none md:py-9"
                >
                  <span className="font-mono text-sm text-white/30 transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="font-display text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {proj.name}
                    </span>
                    <span className="max-w-[55ch] text-sm leading-relaxed text-white/40 md:text-base">
                      {proj.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="self-center text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  />
                </Link>
              </Reveal>
            ))
          ) : (
            <div className="space-y-4 py-8">
              <Skeleton className="h-8 w-1/3 rounded-full" />
              <Skeleton className="h-5 w-2/3 rounded-full" />
              <Skeleton className="h-8 w-1/3 rounded-full" />
              <Skeleton className="h-5 w-2/3 rounded-full" />
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28 pb-12 text-center md:pb-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            <span className="text-accent">●</span> What&apos;s next?
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-[16ch] font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
            Let&apos;s build something{" "}
            <em className="font-light italic text-accent">together</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-[48ch] text-white/50">
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="link-underline expand-target cursor-none font-display text-xl italic text-accent md:text-2xl"
            >
              Get in touch
            </Link>
            {[
              { label: "Resume", href: "/matthew-pandolfo.pdf" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/matthew-pandolfo/",
              },
              { label: "GitHub", href: "https://github.com/PandolfoM" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="link-underline expand-target cursor-none font-mono text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
