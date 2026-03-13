import React from "react";

const steps = [
  {
    id: 1,
    title: "Book Your Service",
    description:
      "Select your AC service and fill in your details to place the booking easily.",
    icon: "📅",
  },
  {
    id: 2,
    title: "Choose Date & Time",
    description:
      "Select your preferred date and time slot for the technician visit.",
    icon: "⏰",
  },
  {
    id: 3,
    title: "Technician Visit",
    description:
      "Our trained technician will visit your location and inspect the AC unit.",
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Service Completed",
    description:
      "Your AC service will be completed and you can make the payment easily.",
    icon: "✅",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works gradient_howitwork-bg py-5">
      <div className="container">
        <h2 className="text-center mb-3">How It Works</h2>
        <p className="text-center text-secondary mb-4">
          Simple steps to book AC repair and service
        </p>

        <div className="row g-4">
          {steps.map((step) => (
            <div key={step.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <div className="mb-3" style={{ fontSize: "40px" }}>
                    {step.icon}
                  </div>
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text text-secondary">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;