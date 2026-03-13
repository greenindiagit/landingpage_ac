import React from "react";

const faqs = [
  {
    question: "How can I book an AC service?",
    answer:
      "You can easily book an AC service through our website by selecting the service and choosing your preferred date and time.",
  },
  {
    question: "Do you provide same-day AC repair service?",
    answer:
      "Yes, we provide same-day AC repair service in most locations depending on technician availability.",
  },
  {
    question: "What brands of AC do you repair?",
    answer:
      "Our technicians can repair all major AC brands including LG, Samsung, Voltas, Daikin, Hitachi and more.",
  },
  {
    question: "What is included in AC servicing?",
    answer:
      "AC servicing includes cleaning filters, checking gas pressure, coil cleaning, and overall system inspection.",
  },
];

const FAQ = () => {
  return (
    <section className="faq py-5 bg-white">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2 className="mb-3 text-center">Frequently Asked Questions</h2>
        <p className="text-secondary text-center mb-4">
          Find answers to common questions
        </p>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;