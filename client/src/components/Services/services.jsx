import React from "react";

const services = [
  {
    id: 1,
    title: "AC Installation",
    description:
      "Professional AC installation service for split & window AC. Safe setup by expert AC technicians.",
    img: "/assets/img/services/AC_Install.jpeg",
  },
  {
    id: 2,
    title: "AC Uninstallation",
    description:
      "Quick and safe AC uninstallation service for split & window AC without wall damage.",
    img: "/assets/img/services/AC_Uninstall.jpeg",
  },
  {
    id: 3,
    title: "AC Service",
    description:
      "Expert AC service and cleaning to improve cooling, efficiency, and AC performance.",
    img: "/assets/img/services/AC_service.png",
  },
  {
    id: 4,
    title: "AC Repair",
    description:
      "Fast AC repair service for no cooling, gas leakage, and other AC problems.",
    img: "/assets/img/services/AC_Repair.jpeg",
  },
];

const Services = () => {
  return (
    <section className="services py-5 gradient-bg ">
      <div className="container">
        <h2 className="text-center mb-3">Our Services</h2>
        {/* <p className="text-center text-secondary mb-4">
          We provide complete AC repair and maintenance solutions.
        </p> */}

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm border-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
