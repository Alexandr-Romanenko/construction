import "./services.css";
import ServicesCard from "../servicesCard/ServicesCard";

export default function Services() {
  return (
    <section>
      <div className="container">
        <div className="services-container">
          <div className="header-box">
            <h2 className="section-title services-header">Services</h2>
            <div className="text-box">
              <p className="text-achievement">
                Aliquam tincidunt pellentesque ligula, id luctus tellus pulvinar
                at. Vivamus eget ligula tincidunt, placerat neque ac, tempus
                iaculis vel quam magna.
              </p>
            </div>
          </div>

          <ServicesCard />
        </div>
      </div>
    </section>
  );
}
