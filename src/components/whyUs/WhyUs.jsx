import { useState } from "react";
import { whyUs } from "../../utils/whyUs";
import Slider from "../slider/Slider";
import "./whyus.css";

export default function () {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, whyUs.length - itemsPerPage);
  const sliderWidth = 542;
  const handleWidth = 170;

  const handleDrag = (e) => {
    const slider = document.querySelector(".slider-track");
    if (!slider) return; // Проверяем, что элемент существует

    const rect = slider.getBoundingClientRect();
    let newX = e.clientX - rect.left - handleWidth / 2;

    newX = Math.max(0, Math.min(newX, sliderWidth - handleWidth));
    const newIndex = Math.round(
      (newX / (sliderWidth - handleWidth)) * maxIndex
    );
    setStartIndex(newIndex);
  };

  return (
    <section>
      <div className="container">
        <div className="why-container">
          <h2 className="section-title why-header">Why us</h2>
          <div className="why-cards-section">
            <div className="why-cards">
              {whyUs
                .slice(startIndex, startIndex + itemsPerPage)
                .map((item) => (
                  <div key={item.id} className="card">
                    <img src={item.image} alt={item.alt} className="card-img" />
                    <h6 className="card-header">{item.title}</h6>
                    <p className="card-text">{item.text}</p>
                  </div>
                ))}
            </div>

            <div className="slider-container">
              <Slider
                startIndex={startIndex}
                maxIndex={maxIndex}
                sliderWidth={sliderWidth}
                handleWidth={handleWidth}
                handleDrag={handleDrag}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
