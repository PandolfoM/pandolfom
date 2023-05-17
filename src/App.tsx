import { Component, createEffect, createSignal, onCleanup } from "solid-js";

import styles from "./App.module.css";

const App: Component = () => {
  const [isPaused, setIsPaused] = createSignal<"paused" | "running">("running");

  createEffect(() => {
    setTimeout(() => {
      setIsPaused("paused");
      setTimeout(() => {
        setIsPaused("running");
      }, 1000);
    }, 1300);
  });

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

export default App;
