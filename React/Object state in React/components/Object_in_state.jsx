import { useState } from "react";

export default function Obj() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        backgroundColor: "gray",
        position: "relative",
        width: "100vw",
        height: "60vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      ></div>

<div
        style={{
          position: "absolute",
          backgroundColor: "orange",
          borderRadius: "50%",
          transform: `translate(${position.x+23}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      ></div>

<div
        style={{
          position: "absolute",
          backgroundColor: "green",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y+34}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      ></div>

<div
        style={{
          position: "absolute",
          backgroundColor: "blue",
          borderRadius: "50%",
          transform: `translate(${position.x-34}px, ${position.y+34}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      ></div>
    </div>
  );
}
