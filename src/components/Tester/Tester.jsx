import { useState } from "react";
import { reviews } from "../../utils/reviews";
import "./Tester.css";
import fbIcon from "../../img/icons/sosial/fb/fb.svg";

export default function ReviewsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const reviewsPerPage = 3;
  const maxIndex = Math.max(0, reviews.length - reviewsPerPage);
  const sliderWidth = 542;
  const handleWidth = 170;
  //const stepSize = (sliderWidth - handleWidth) / maxIndex;

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
      <div className="slider-block">
        <div className="slider-card-section">
          {reviews
            .slice(startIndex, startIndex + reviewsPerPage)
            .map((review) => (
              <div key={review.id} className="review-item">
                <img
                  src={review.stars}
                  alt={review.alt}
                  className="review-item-img"
                />
                <p className="review-item-text">{review.text}</p>
                <div className="review-item-sign">
                  <p className="review-item-initials">{review.initials}</p>
                  <a
                    href={review.fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={fbIcon}
                      alt="Facebook icon"
                      className="facebook-icon"
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Кастомная полоса прокрутки */}
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
      </div>
    </section>
  );
}
