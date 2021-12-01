import React from "react";

export default function Picker({
  head,
  onHeadChange,
  middle,
  onMiddleChange,
  pants,
  onPantsChange,
  newPhrase,
  setNewPhrase,
  handleClick,
}) {
  const headImages = ["bird", "dog", "duck", "horse"];
  const middleImages = ["blue", "fancy", "pink", "red"];
  const pantsImages = ["blue", "dog", "leg", "white"];

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

      <label>
        Pants
        <select
          value={pants}
          onChange={(event) => onPantsChange(event.target.value)}
        >
          {pantsImages.map((image) => {
            return <option key={image}>{image}</option>;
          })}
        </select>
      </label>

      <label>
        New Phrase
        <input
          type="text"
          value={newPhrase}
          onChange={(event) => setNewPhrase(event.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Submit Phrase!
      </button>
    </div>
  );
}
