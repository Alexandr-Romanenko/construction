import { useState } from "react";
import { ServiseAreaList } from "../../utils/serviceAreaList";
import { NavLink } from "react-router-dom";
import "./serviceArea.css";

export default function ServiceArea() {
  const [offset, setOffset] = useState(0);
  const sliderWidth = 542;
  const handleWidth = 170;
  const step = 50; // Шаг сдвига
  const totalItems = ServiseAreaList.length;
  const itemsPerRow = Math.ceil(totalItems / 2);

  const handleDrag = (e) => {
    const slider = document.querySelector(".slider-track");
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    let newX = e.clientX - rect.left - handleWidth / 2;
    newX = Math.max(0, Math.min(newX, sliderWidth - handleWidth));

    const newOffset =
      (-newX / (sliderWidth - handleWidth)) * (totalItems * step);
    setOffset(newOffset);
  };

  return (
    <section>
      <div className="container">
        <div className="service-area-container">
          <div className="service-area-text">
            <h2 className="section-title service-area-header">Service area</h2>
            <div className="detailed-link">
              <NavLink to="/all-service-area" className="nav-link">
                See all
              </NavLink>
            </div>
          </div>

          <div className="service-area-slider-block">
            <div className="sa-slider-card-section">
              {[0, 1].map((row) => (
                <div
                  key={row}
                  className="sa-row"
                  style={{
                    transform: `translateX(${offset}px)`,
                    display: "flex",
                    flexWrap: "nowrap",
                    width: "max-content",
                    paddingRight: "60px",
                  }}
                >
                  {ServiseAreaList.slice(
                    row * itemsPerRow,
                    (row + 1) * itemsPerRow
                  ).map((area) => (
                    <div key={area.id} className="sa-item">
                      {area.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="slider-container">
            <div className="slider-track">
              <div
                className="slider-handle"
                style={{
                  transform: `translateX(${
                    (-offset / (totalItems * step)) *
                    (sliderWidth - handleWidth)
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
        </div>
      </div>
    </section>
  );
}
