import "./mainblock.css";
import mainImg from "../../img/pictures/main_pict.png";
import Button from "../button/Button";

export default function MainBlock() {
  function handleClick() {
    return console.log("clik");
  }
  return (
    <section>
      <div className="container">
        <div className="main-block-container">
          <div className="section-title">
            <h1 className="main-block-header">
              Lorem ipsum and <br /> consectetur adipisc elit
            </h1>
          </div>
          <div className="main-section-img">
            <p className="main-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae sem urna. Pellentesque molestie risus eu vestibulum semper.
            </p>

            <div>
              <Button
                className="btn btn-mainblock"
                type="button"
                onClick={handleClick}
              >
                Get a free quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
