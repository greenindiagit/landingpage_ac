import React from "react";

const plans = [
  {
    id: 1,
    title: "Basic Service",
    price: "₹499",
    features: ["AC Inspection", "Basic Cleaning", "Filter Cleaning", "Service Report"],
  },
  {
    id: 2,
    title: "Standard Service",
    price: "₹999",
    features: ["Complete AC Cleaning", "Coil Cleaning", "Filter Cleaning", "Performance Check"],
  },
  {
    id: 3,
    title: "Premium Service",
    price: "₹1499",
    features: ["Deep Cleaning", "Gas Pressure Check", "Coil & Filter Cleaning", "Full AC Inspection"],
  },
];

const Pricing = () => {
  return (
    <section className="pricing py-5 bg-light py-md-2">
      <div className="container">
        <h2 className="text-center mb-3">Our Pricing</h2>
        <p className="text-center text-secondary mb-4">
          Affordable AC service plans for your home
        </p>

        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{plan.title}</h5>
                  <h2 className="text-primary my-3">{plan.price}</h2>

                  <ul className="list-unstyled text-start mb-4 flex-grow-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        ✔ {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="btn btn-primary mt-auto"
                   onClick={() => (window.location.href = "https://greenindiateam.com/services/ac-repair-service-delhi-ncr")}
                  >Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;