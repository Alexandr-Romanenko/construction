import { useState } from "react";
import { reviews } from "../../utils/reviews";
import { NavLink } from "react-router-dom";
import "./reviews.css";
import fbIcon from "../../img/icons/sosial/fb/fb.svg";
import Slider from "../slider/Slider";

export default function Reviews() {
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
      <div className="container">
        <div className="reviews-container">
          <div className="reviews-text">
            <h2 className="section-title reviews-header">Reviews</h2>
            <div className="detailed-link">
              <NavLink to="/all-reviews" className="nav-link">
                See all
              </NavLink>
            </div>
          </div>

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
