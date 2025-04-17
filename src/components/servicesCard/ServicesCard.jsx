import { useState } from "react";
import { services } from "../../utils/services";
import "./servicesCard.css";

export default function ServicesCard() {
  const [selectedService, setSelectedService] = useState("Waterproofing");

  return (
    <div className="servise-block">
      <ul className="servise-list">
        {Object.keys(services).map((service) => (
          <li
            key={service}
            onClick={() => setSelectedService(service)}
            className={`servise-item ${
              selectedService === service ? "active" : ""
            }`}
          >
            {service}
          </li>
        ))}
      </ul>
      <div className="services-card-section">
        {services[selectedService].map((card, index) => (
          <div key={index} className="service-card">
            <img src={card.img} alt={card.title} className="service-card-img" />
            <h6 className="service-card-title">{card.title}</h6>
            <p className="service-card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
