import React from "react";

const features = [
  {
    id: 1,
    title: "AC Install",
    img: "/assets/img/sub_services/AC_install.png",
  },
  {
    id: 2,
    title: "AC Uninstall",
    img: "/assets/img/sub_services/AC_UNINSTALL.png",
  },
  {
    id: 3,
    title: "AC Jet Service",
    img: "/assets/img/sub_services/AC_Jet_Service.png",
  },
  {
    id: 4,
    title: "AC Foam Jet Service",
    img: "/assets/img/sub_services/AC_FoamJet_Service.png",
  },
  {
    id: 5,
    title: "AC Gas Refill",
    img: "/assets/img/sub_services/AC_GasRefill.png",
  },
  {
    id: 6,
    title: "AC Noise Issue",
    img: "/assets/img/sub_services/AC_Sound_Issue.png",
  },
];

const SubService = () => {
  return (
    <section className="sub-services py-5">
      <div className="container">

        <div className="row g-4 text-center">

          {features.map((feature) => (
            <div key={feature.id} className="col-6 col-md-4 col-lg-2">

              <div className="sub-service-card">

                <img
                  src={feature.img}
                  alt={feature.title}
                  className="sub-service-icon"
                />

                <p className="sub-service-title">
                  {feature.title}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SubService;