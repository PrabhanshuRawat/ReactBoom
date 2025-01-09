import { useState } from "react";
import "./randomStyles.css";

export function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("hex");

  function randomColorUtils(length) {
    return Math.floor(Math.random() * length);
  }

  function handleClickHEX() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtils(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }

  function handleClickRGB() {
    const r = randomColorUtils(256);
    const g = randomColorUtils(256);
    const b = randomColorUtils(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
    console.log(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div
      className="random-color-container"
      style={{ backgroundColor: color }}
    >
      <button onClick={() => setType("hex")}>Create Hex Color</button>
      <button onClick={() => setType("rgb")}>Create RGB Color</button>
      <button onClick={type === "hex" ? handleClickHEX : handleClickRGB}>
        Generate Random Color
      </button>
      <h3>{type === "hex" ? "HEX" : "RGB"}</h3>
      <div>{color}</div>
    </div>
  );
}