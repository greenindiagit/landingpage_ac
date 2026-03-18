import React from "react";

const features = [
  {
    id: 1,
    title: "AC Install",
    img: "/assets/img/sub_services/AC_install.png",
    link: "https://greenindiateam.com/services/ac-repair-service-delhi-ncr",
  },
  {
    id: 2,
    title: "AC Uninstall",
    img: "/assets/img/sub_services/AC_UNINSTALL.png",
    link: "https://greenindiateam.com/services/ac-repair-service-delhi-ncr",
  },
  {
    id: 3,
    title: "AC Jet Service",
    img: "/assets/img/sub_services/AC_Jet_Service.png",
    link: "https://greenindiateam.com/services/ac-repair-service-delhi-ncr",
  },
  {
    id: 4,
    title: "AC Foam Jet Service",
    img: "/assets/img/sub_services/AC_FoamJet_Service.png",
    link: "https://greenindiateam.com/services/ac-repair-service-delhi-ncr",
  },
  {
    id: 5,
    title: "AC Gas Refill",
    img: "/assets/img/sub_services/AC_GasRefill.png",
    link: "https://greenindiateam.com/services/split-ac-gas-refill-check-up-service",
  },
  {
    id: 6,
    title: "AC Noise Issue",
    img: "/assets/img/sub_services/AC_Sound_Issue.png",
    link: "https://greenindiateam.com/services/ac-repair-service-delhi-ncr",
  },
];

const SubService = () => {
  return (
    <section className="sub-services py-5 py-md-2">
      <div className="container">
        <div className="row g-4 text-center">
          {features.map((feature) => (
            <div key={feature.id} className="col-4 col-md-3 col-lg-2">
              <div className="sub-service-card">
                <a href={feature.link}>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="sub-service-icon"
                  />
                </a>

                <p className="sub-service-title">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubService;
