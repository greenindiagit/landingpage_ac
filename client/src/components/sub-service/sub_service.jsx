import React from "react";

const features = [
  {
    id: 1,
    title: "AC Install",
    img: "/assets/img/sub_services/AC_install.png",
  },
  { id: 2,
    title: "AC Uninstall",
    img: "/assets/img/sub_services/AC_UNINSTALL.png" },
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
    title: "AC Gas Refill and Checkup",
    img: "/assets/img/sub_services/AC_GasRefill.png",
  },
  { id: 6,
    title: "AC Noise Issue", 
    img: "/assets/img/sub_services/AC_Sound_Issue.png" },
];

const SubService = () => {
  return (
    <section className="why-choose-us py-5">
      <div className="container">
        <div className="row">
          {features.map((feature) => (
            <div key={feature.id} className="col-6 col-md-4 col-lg-2">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body sub_services_card">
                  <div className="mb-2">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="card-img-top"
                    />
                  </div>
                  <span>{feature.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubService;
