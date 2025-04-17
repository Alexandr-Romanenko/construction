import { useState } from "react";
import "./slider.css";

export default function Slider({
  startIndex,
  maxIndex,
  sliderWidth,
  handleWidth,
  handleDrag,
}) {
  return (
    <div className="slider-container">
      <div className="slider-track">
        <div
          className="slider-handle"
          style={{
            transform: `translateX(${
              (startIndex / maxIndex) * (sliderWidth - handleWidth)
            }px)`,
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            const moveHandler = (event) => handleDrag(event);
            const upHandler = () => {
              document.removeEventListener("mousemove", moveHandler);
              document.removeEventListener("mouseup", upHandler);
            };
            document.addEventListener("mousemove", moveHandler);
            document.addEventListener("mouseup", upHandler);
          }}
        ></div>
      </div>
    </div>
  );
}
