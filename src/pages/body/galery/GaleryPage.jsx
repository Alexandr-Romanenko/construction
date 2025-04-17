import workImg1 from "../../../img/pictures/our_works/our_works_1.png";
import workImg2 from "../../../img/pictures/our_works/our_works_2.png";
import workImg3 from "../../../img/pictures/our_works/our_works_3.png";
import workImg4 from "../../../img/pictures/our_works/our_works_4.png";
import workImg5 from "../../../img/pictures/our_works/our_works_5.png";
import workImg6 from "../../../img/pictures/our_works/our_works_6.png";
import "./galeryPage.css";

export default function GaleryPage() {
  return (
    <section>
      <div className="container">
        <div className="galery-container">
          <div className="galery-text">
            <h2 className="section-title works-header">Galery</h2>
          </div>

          <div className="works-img">
            <img src={workImg1} alt="Work example one" className="work-img-1" />
            <img src={workImg2} alt="Work example two" className="work-img-2" />
            <img
              src={workImg3}
              alt="Work example three"
              className="work-img-3"
            />
            <img
              src={workImg4}
              alt="Work example four"
              className="work-img-4"
            />
            <img
              src={workImg5}
              alt="Work example five"
              className="work-img-5"
            />
            <img src={workImg6} alt="Work example six" className="work-img-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
