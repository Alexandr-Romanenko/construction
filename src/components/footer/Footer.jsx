import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import SocialMedia from "../socialMedia/SocialMedia";
import Button from "../button/Button";
import "./footer.css";

export default function () {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("xvgkovvn");

  // Проверяем, заполнены ли все поля
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email.trim());

  const isFormValid = email.trim() !== "" && isEmailValid;

  if (state.succeeded) {
    return <p className="success-message">Thanks for applying!</p>;
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-pages">
            <ul className="footer-page-list for-customers">
              <li className="footer-link-header">For customers</li>
              <li className="footer-page-list__item">
                <NavLink to="/place-an-order">How to place an order</NavLink>
              </li>
              <li className="footer-page-list__item">
                <NavLink to="/payment-methods">Payment methods</NavLink>
              </li>
              <li className="footer-page-list__item">
                <NavLink to="/delivery-details">Delivery details</NavLink>
              </li>
              <li className="footer-page-list__item">
                <NavLink to="/guarantee">Guarantee</NavLink>
              </li>
              <li className="footer-page-list__item">
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>

            <ul className="footer-page-list about-us">
              <li className="footer-link-header">About us</li>
              <li className="footer-page-list__item">
                <NavLink to="/our-team">Our team</NavLink>
              </li>
              <li className="footer-page-list__item">
                <NavLink to="/our-history">Our history</NavLink>
              </li>
              <li className="footer-page-list__item">
                <NavLink to="/privacy-policy">Privacy policy</NavLink>
              </li>
              <li className="footer-page-list__item">
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
            </ul>

            <ul className="footer-page-list contacts">
              <li className="footer-link-header">Contacts</li>
              <li className="footer-page-list__item">
                <address className="footer-address__item">
                  <a
                    href="https://maps.app.goo.gl/j4UFEZbjaXkV7cPT7"
                    target="_blank"
                  >
                    123 Random Address, Kyiv, 01001, Ukraine
                  </a>
                </address>
              </li>
              <li className="footer-page-list__item">
                <a href="tel:1234567890">(123) 456-7890</a>
              </li>
              <li className="footer-page-list__item">
                <a href="mailto:info@random.ua">info@random.ua</a>
              </li>
            </ul>
          </div>
          <div className="footer-social-block">
            <h3 className="footer-social-block-header">
              Be the first to know about new products!
            </h3>

            <form onSubmit={handleSubmit} className="form-footer-container">
              <input
                id="email"
                type="email"
                name="email"
                className="form-footer-email-fild"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <Button
                className="btn btn-footer"
                type="submit"
                disabled={!isFormValid || state.submitting} // Блокируем кнопку, если форма не заполнена
              >
                Send
              </Button>
            </form>

            <div className="footer-social-media-block">
              <div>
                <p className="footer-social-header">Our social networks:</p>
              </div>
              <div className="footer-social-media__list">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
