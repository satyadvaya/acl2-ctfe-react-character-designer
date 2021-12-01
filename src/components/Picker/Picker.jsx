import React from "react";

export default function Picker({ head, onHeadChange, middle, onMiddleChange }) {
  const headImages = ["dog", "bird", "duck"];
  const middleImages = ["red", "pink", "blue", "fancy"];

  return (
    <div>
      <label>
        Head
        <select
          value={head}
          onChange={(event) => onHeadChange(event.target.value)}
        >
          {headImages.map((image) => {
            return <option key={image}>{image}</option>;
          })}
        </select>
      </label>

      <label>
        Middle
        <select
          value={middle}
          onChange={(event) => onMiddleChange(event.target.value)}
        >
          {middleImages.map((image) => {
            return <option key={image}>{image}</option>;
          })}
        </select>
      </label>
    </div>
  );
}
