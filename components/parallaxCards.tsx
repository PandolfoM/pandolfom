"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import Lenis from "@studio-freight/lenis";

type CardData = {
  title: string;
  src?: string;
  url?: string;
  color: string;
  content?: string;
};

interface CardProps extends CardData {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const projects: CardData[] = [
  {
    title: "Projects",
    url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    content: `<p>Hi</p>`,
    color: "bg-accent",
  },
  {
    title: "About",
    url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "bg-background",
  },
  {
    title: "Let's Chat",
    url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "bg-accent",
  },
  {
    title: "Socials",
    url: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "bg-background",
  },
];

const Card = ({
  i,
  title,
  src,
  url,
  content,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-dvh flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(7vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-1/4 h-[500px] w-[1000px] rounded-2xl p-12 origin-top bg-linear-to-tr from-[#371314] inset-shadow-sm inset-shadow-background/50 to-accent`}>
        <h2 className="text-center m-0 text-2xl">{title}</h2>
        <div className="flex h-full mt-12 gap-12">
          {/* <div className="w-2/5 relative top-[10%]">
            <p>{description}</p>
            <span className="flex items-center gap-1">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline cursor-pointer">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div> */}
          {content && (
            <div
              className="w-2/5 relative top-[10%]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {src && (
            <div className="relative w-3/5 h-full rounded-3xl overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}>
                <Image fill src={src} alt="image" className="object-cover" />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ParallaxCards = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={container}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default ParallaxCards;
