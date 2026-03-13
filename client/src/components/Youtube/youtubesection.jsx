import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Video Side */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
              <iframe
                src="https://www.youtube.com/embed/U-M1oep7kjI"
                title="AC Repair Service Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content Side */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start">

            <h2 className="fw-bold mb-3">
              Professional AC Repair Service
            </h2>

            <p className="text-secondary mb-4">
              Watch how our expert technicians provide fast and reliable
              AC repair services. We ensure quality work, affordable pricing,
              and customer satisfaction.
            </p>

            <ul className="list-unstyled mb-4">
              <li>✔ Expert Technicians</li>
              <li>✔ Fast Service</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ 24/7 Customer Support</li>
            </ul>

            <button className="btn btn-primary book-btn">
              Book AC Service
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;