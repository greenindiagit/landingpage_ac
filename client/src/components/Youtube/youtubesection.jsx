import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Video Side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/watch?v=U-M1oep7kjI"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content Side */}
          <div className="col-md-6">
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

            <button className="btn btn-primary">
              Book AC Service
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;