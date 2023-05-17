import { Component, createEffect, createSignal, onCleanup } from "solid-js";

import styles from "./Hero.module.css";

const Hero: Component = () => {
  const [isPaused, setIsPaused] = createSignal<"paused" | "running">("running");

  setTimeout(() => {
    setIsPaused("paused");
    setTimeout(() => {
      setIsPaused("running");
    }, 1000);
  }, 1300);

  return (
    <div class={styles.wrapper}>
      <h1
        class={styles.typing_1}
        style={`--time: 2s; --characters: 24; --paused:${isPaused()};`}>
        Hi, im Matthew Pandolfo.
      </h1>
    </div>
  );
};

export default Hero;
