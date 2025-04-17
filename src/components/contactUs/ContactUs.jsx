import { useState } from "react";
import Button from "../button/Button";
import SocialMedia from "../socialMedia/SocialMedia";
import "./contactUs.css";
import FormDiscussion from "../forms/formDiscussion/FormDiscussion";

export default function ContactUs() {
  const [yourname, setYourname] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");

  function handleSubmit() {
    return console.log("clik");
  }

  return (
    <section id="contact-us">
      <div className="container">
        <div className="contacts-container">
          <div>
            <h2 className="section-title contact-us-header">Contact us</h2>
          </div>
          <div className="contacts-section">
            <div className="contacts-block">
              <div className="contact-addsress">
                <p className="contact-header">Our address:</p>
                <address className="contact-address__link">
                  <a
                    href="https://maps.app.goo.gl/j4UFEZbjaXkV7cPT7"
                    target="_blank"
                  >
                    123 Random Address, Kyiv, 01001, Ukraine
                  </a>
                </address>
              </div>
              <div className="contact-links">
                <div className="contact-social-media">
                  <div>
                    <p className="contact-header">Our social networks:</p>
                  </div>
                  <div className="contact-social-media__list">
                    <SocialMedia />
                  </div>
                </div>
                <div className="contact-tel-email">
                  <p className="contact-header">Our contacts:</p>
                  <div className="contact-tel">
                    <a href="tel:1234567890">(123) 456-7890</a>
                  </div>
                  <div className="contact-email">
                    <a href="mailto:info@random.ua">info@random.ua</a>
                  </div>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325519.5754645912!2d30.203061702344527!3d50.40156980294686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x5f251d1397901804!2z0LzRltGB0YLQviDQmtC40ZfQsiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1741620430249!5m2!1suk!2sua"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin"
                  className="contact-google-map"
                ></iframe>
              </div>
            </div>
            <div className="contact-form-block">
              <div>
                <h3 className="form-header">Let's Discuss Your Options</h3>
              </div>
              <div className="contact-form">
                <FormDiscussion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
