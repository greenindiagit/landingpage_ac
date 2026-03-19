import { useEffect, useState } from "react";

const services = [
  {
    id: 1,
    title: "AC Installation",  mobileTitle: "AC Installation",
    description:
      "Professional AC installation service for split & window AC. Safe setup by expert AC technicians.",
    img: "/assets/img/services/AC_Install.jpeg",
    link: "https://greenindiateam.com/services/installation",
  },
  {
    id: 2,
    title: "AC Uninstallation",  mobileTitle: "AC Uninstallation",
    description:
      "Quick and safe AC uninstallation service for split & window AC without wall damage.",
    img: "/assets/img/services/AC_Uninstall.jpeg",
    link: "https://greenindiateam.com/services/uninstallation",
  },
  {
    id: 3,
    title: "AC Service",
     mobileTitle: "AC Service",
    description:
      "Expert AC service and cleaning to improve cooling, efficiency, and AC performance.",
    img: "/assets/img/services/AC_service.png",
    link: "https://greenindiateam.com/services/service",
  },
  {
    id: 4,
    title: "AC Repair & Diagnosis",
    mobileTitle: "AC Repair",
    description:
      "Fast AC repair service for no cooling, gas leakage, and other AC problems.",
    img: "/assets/img/services/AC_Repair.jpeg",
    link: "https://greenindiateam.com/services/repair-diagnosis-1",
  },
];

const Services = () => {
   const [isMobile, setIsMobile] = useState(false);
     useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="services section_py gradient-bg">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
        </div>

        <div className="row g-4 text-center">
          {services.map((service) => (
            <div key={service.id} className="col-6 col-md-6 col-lg-3">
              {/* Card only for image */}
              <div className="card service-card border-0 shadow-sm ">
                <a href={service.link}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid"
                  />
                </a>
              </div>

              {/* Content outside card */}
              <div >
                <a href={service.link} className=" btn fornt_call">
                 {isMobile ? service.mobileTitle : service.title}
                </a>
              </div>

              <p className="text-secondary small justify-content-start">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
