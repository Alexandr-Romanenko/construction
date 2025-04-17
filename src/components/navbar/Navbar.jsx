import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import FormBackCall from "../forms/formBackCall/FormBackCall";
import "./navbar.css";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  //  function handleScrollToWhyUs() {
  //    const element = document.getElementById("why-us");
  //    if (element) {
  //      element.scrollIntoView({ behavior: "smooth" }); // плавная прокрутка
  //    }
  //  }

  const handleScrollToContactUs = (e) => {
    e.preventDefault(); // отменяем стандартную прокрутку и поведение ссылки
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="nav-container">
        <nav className="nav-block">
          <NavLink to="/" className="logo">
            LOGO
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/about-us">About</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/why-us">Why us</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/our-works">Our works</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/service-area">Service area</NavLink>
            </li>
            <li className="nav-list__item">
              <a
                href="#contact-us"
                onClick={handleScrollToContactUs}
                className="nav-link"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <Button className="btn-callback" type="button" onClick={openModal}>
          Back call
        </Button>
      </div>
      <Modal open={isModalOpen} className="modal-form-back-call">
        <Button
          className="btn btn-close-modal"
          type="button"
          onClick={() => setIsModalOpen(false)}
        >
          x
        </Button>

        <h3 className="modal-header">Get a back call</h3>
        <div className="contact-form">
          <FormBackCall />
        </div>
      </Modal>
    </div>
  );
}
