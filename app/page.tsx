"use client";

import TextType from "@/components/TextType";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <section className="h-dvh flex items-center justify-center">
        <TextType
          text={["Matthew Pandolfo"]}
          typingSpeed={250}
          // variableSpeed={{ min: 250, max: 150 }}
          pauseDuration={1500}
          showCursor={true}
          loop={false}
          initialDelay={500}
          cursorCharacter="_"
          className="text-3xl"
        />
        {/* <motion.p
          initial={{ animationDelay: 1000, opacity: 0, x: -100 }}
          animate={{ animationDelay: 1000, opacity: 1, x: 0 }}>
          hi
        </motion.p> */}
      </section>
    </div>
  );
}
