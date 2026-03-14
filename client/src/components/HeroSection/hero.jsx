import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section position-relative">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/assets/img/video/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content container">
        <div className="row  align-items-center min-vh-100 text-center text-md-start">
          <div className="col-lg-6 col-md-8 text-white">
            <button className="mb-4">Best AC Repair and Service in Delhi NCR</button>

           <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <button
                className="video-btn "
                onClick={() =>
                  (window.location.href =
                    "https://greenindiateam.com/services/ac-repair-service-delhi-ncr")
                }
              >
                Book Service
              </button>

              <button
                className="video-btn "
                onClick={() =>
                  (window.location.href =
                    "https://wa.me/918090400401 ")
                }
              >
                Request For Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
