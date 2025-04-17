import "./underReviewsBlock.css";
import windowsImg from "../../img/pictures/additional_pict_two.png";

export default function UnderReviewsBlock() {
  return (
    <section>
      <div className="under-reviews-container">
        <img src={windowsImg} alt="building with windows" />
      </div>
    </section>
  );
}
