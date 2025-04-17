import { useNavigate } from "react-router-dom";
import aboutImg from "../../img/pictures/about_us.png";
import Button from "../button/Button";
import "./aboutus.css";

export default function AboutUs() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about-us");
  }

  return (
    <section>
      <div className="container">
        <div className="about-container">
          <div className="about-text-section">
            <h2 className="section-title about-header">About us</h2>
            <div className="about-box">
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vitae sem urna. Pellentesque molestie risus eu vestibulum
                semper. Proin ac porta massa. Proin eu neque rutrum, fringilla
                lectus in, ultricies neque. Sed fringilla egestas neque ac
                bibendum. Nam ullamcorper magna ut fermentum viverra. Donec eget
                tellus nisl. Ut dolor magna, sagittis nec dapibus at, viverra
                vel felis. Nulla posuere, orci nec malesuada volutpat, dolor
                velit faucibus ex, eget auctor mi sapien a dolor. In fermentum
                lectus id convallis dictum. Donec euismod augue sit amet dolor
                euismod, nec fringilla arcu accumsan. Integer diam ipsum, tempor
                sit amet velit tristique, euismod tempus nisi. Sed tincidunt sit
                amet elit ut commodo. Pellentesque ipsum elit, gravida ut
                maximus in, ornare non orci. Donec a lacinia lacus, at elementum
                magna.
              </p>
            </div>
            <div>
              <Button
                className="btn btn-about"
                type="button"
                onClick={handleClick}
              >
                View more
              </Button>
            </div>
          </div>

          <div className="img-block">
            <img src={aboutImg} alt="About us" />
          </div>
        </div>
      </div>
    </section>
  );
}
