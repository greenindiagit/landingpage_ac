import React from "react";

const features = [
  {
    id: 1,
    title: "Expert Technicians",
    description: "Our trained professionals provide reliable AC repair and maintenance services.",
    icon: "👨‍🔧",
  },
  {
    id: 2,
    title: "Fast Service",
    description: "Quick response and same-day service available in most areas.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges for any service.",
    icon: "💰",
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "We focus on delivering the best service experience for our customers.",
    icon: "⭐",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-5 ">
      <div className="container">
        <h2 className="text-center mb-3">Why Choose Us</h2>
        <p className="text-center text-secondary mb-4">
          We provide professional and reliable AC services you can trust.
        </p>

        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3" style={{ fontSize: "40px" }}>
                    {feature.icon}
                  </div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text text-secondary">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;