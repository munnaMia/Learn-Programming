import { useState } from "react";

const intialShapes = [
  { id: 0, type: "circle", x: 50, y: 250 },
  { id: 1, type: "square", x: 150, y: 250 },
  { id: 2, type: "circle", x: 250, y: 250 },
];

export default function Transfrom() {
  const [shape, setShape] = useState(intialShapes);

  function handleClick() {
    const nextStep = shape.map((ele) => {
      if (ele.type === "square") {
        return ele;
      } else {
        return {
          ...ele,
          y: ele.y + 50,    
        };
      }
    });

    setShape(nextStep);
  }

  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      {shape.map((ele) => (
        <div
          key={ele.id}
          style={{
            background: "purple",
            position: "absolute",
            left: ele.x,
            top: ele.y,
            borderRadius: ele.type === "circle" ? "50%" : "",
            height: "20px",
            width: "20px",
          }}
        ></div>
      ))}
    </>
  );
}
