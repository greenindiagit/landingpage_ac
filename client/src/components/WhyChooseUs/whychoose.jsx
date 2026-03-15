import React from "react";

const features = [
  {
    id: 1,
    title: "Expert Technicians",
    description:
      "Our trained professionals provide reliable AC repair and maintenance services.",
    icon: "👨‍🔧",
  },
  {
    id: 2,
    title: "Fast Service",
    description:
      "Quick response and same-day service available in most areas.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden charges for any service.",
    icon: "💰",
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description:
      "We focus on delivering the best service experience for our customers.",
    icon: "⭐",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us</h2>
          <p className="text-secondary">
            We provide professional and reliable AC services you can trust.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4">

          {features.map((feature) => (
            <div key={feature.id} className="col-6 col-sm-3 col-lg-3">

              <div className="feature-card h-100 text-center p-4">

                <div className="feature-icon mb-3">
                  {feature.icon}
                </div>

                <h5 className="mb-2">{feature.title}</h5>

                <p className="card-text d-lg-block d-none text-secondary">
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;