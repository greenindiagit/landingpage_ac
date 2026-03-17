import React from "react";

const faqs = [
  {
    question: "बेहतर कूलिंग के लिए AC सर्विस कितनी बार करवानी चाहिए?",
    answer:
      "अच्छी कूलिंग और बेहतर परफॉर्मेंस के लिए AC Service साल में कम से कम 1–2 बार करवानी चाहिए। नियमित AC सर्विस से धूल और गंदगी साफ होती है, बिजली की खपत कम होती है और AC की लाइफ भी बढ़ती है।",
  },
  {
    question: "प्रोफेशनल AC सर्विस में क्या-क्या शामिल होता है?",
    answer:
      "एक सामान्य AC Service या AC Maintenance में फिल्टर क्लीनिंग, कूलिंग कॉइल की जांच, गैस लेवल चेक करना, ड्रेनेज लाइन की सफाई और पूरी यूनिट का निरीक्षण शामिल होता है। इससे AC सही तरीके से काम करता है और बेहतर कूलिंग देता है।",
  },
  {
    question: "क्या आप AC Repair और AC Installation की सेवा भी देते हैं?",
    answer:
      "हाँ, हम AC Repair, AC Installation और AC Maintenance Service प्रदान करते हैं। हमारे अनुभवी तकनीशियन स्प्लिट AC और विंडो AC दोनों की सर्विस और रिपेयर करते हैं ताकि आपका AC सही तरीके से काम करे।",
  },
  {
    question: "नियमित AC Maintenance क्यों जरूरी है?",
    answer:
      "नियमित Air Conditioner Maintenance से AC की कूलिंग बेहतर रहती है, अचानक खराब होने की संभावना कम होती है और बिजली की खपत भी कम होती है। साथ ही यह घर की हवा को साफ रखने में मदद करता है।",
  },
  {
    question: "AC Service या AC Repair कैसे बुक करें?",
    answer:
      "आप हमारी वेबसाइट के माध्यम से आसानी से AC Service या AC Repair Online Book कर सकते हैं। बस अपनी जरूरत की सेवा चुनें, समय तय करें और हमारा तकनीशियन आपके घर पर आकर सर्विस प्रदान करेगा।",
  },
];

const FAQ = () => {
  return (
    <section className="faq top_services py-2">
      <div className="container">
        <div className="row">
          {/* FAQ Section */}
          <div className="col-12 col-md-6">
            <h3 className="mb-3 text-center fw-bold ">Frequently Asked Questions</h3>

            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      }`}
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
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <h3 className="mb-3 text-center fw-bold">
              AC Service & Repair in Delhi NCR, India
            </h3>

            <div className="service_in_delhi_ncr justify-content-evenly">
              <p>
                Looking for reliable AC Service and Repair in Delhi NCR? Our
                experienced technicians provide professional servicing for both
                split AC and window AC to keep your air conditioner running
                smoothly. We focus on proper cleaning, careful inspection, and
                accurate repair so your AC delivers better cooling and longer
                performance. Our technicians arrive with the right tools and
                follow a professional service process to ensure quality work.
                Whether you need regular AC servicing, deep cleaning,
                installation, or repair, our team is ready to help. Book your AC
                service in Delhi NCR today and enjoy comfortable cooling with
                professional support you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
