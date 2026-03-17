import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section py-5">
      <div className="container">
        <div className="row align-items-center ">
          {/* Video Side */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
              <iframe
               src="https://www.youtube.com/embed/b5wUj0GpwfQ"
                // src="https://www.youtube.com/embed/U-M1oep7kjI"
                title="AC Repair Service Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content Side */}
          <div className="col-lg-6 col-md-12  text-lg-start top_services ">
            <h2 className="fw-bold mb-3">AC Service Booking Process</h2>
            <h6 className="fw-bold">Step 1: Choose Service</h6>

            <p className="text-secondary mb-2">
              Select your AC service: Foam-Jet (Split / Window) – ₹499 (₹200
              OFF)
            </p>

            <h6 className="fw-bold">Step 2: Share Details</h6>

            <p className="text-secondary mb-2">
              Send your: Name, Mobile No., Address, AC Type & Preferred Time
            </p>
            <h6 className="fw-bold">Step 3: Confirmation</h6>

            <p className="text-secondary mb-2">
              Our team will call/WhatsApp to confirm your booking.
            </p>
            <h6 className="fw-bold">Step 4: Service Visit</h6>

            <p className="text-secondary mb-2">
              Technician will visit & perform Foam-Jet cleaning
            </p>
            <h6 className="fw-bold"> Step 5: Payment</h6>

            <p className="text-secondary mb-2">
              Pay after service (Cash / UPI / Online)
            </p>

            {/* <ul className="list-unstyled mb-4">
              <li>✔ Expert Technicians</li>
              <li>✔ Fast Service</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ 24/7 Customer Support</li>
            </ul> */}

            {/* <button className="btn btn-primary book-btn">
              Book AC Service
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
