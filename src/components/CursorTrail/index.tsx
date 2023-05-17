import { Component, createSignal, onCleanup, onMount } from "solid-js";

import styles from "./CursorTrail.module.css";

interface TrailItem {
  x: number;
  y: number;
}

const CursorTrail: Component = () => {
  const [trail, setTrail] = createSignal<TrailItem>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const trailItem: TrailItem = {
      x: clientX,
      y: clientY,
    };
    setTrail(trailItem);
  };

  onCleanup(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div>
      <div
        class={styles.spotlight}
        style={`--xPos: ${trail().x}px; --yPos: ${trail().y}px`}
      />
    </div>
  );
};

export default CursorTrail;
