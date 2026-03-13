import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section position-relative">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/img/video/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content container">
        <div className="row justify-content-center align-items-center min-vh-100 text-center text-md-start">

          <div className="col-lg-6 col-md-8 text-white">

            <p className="mb-4">
              Book professional AC repair, installation, and maintenance
              services at your doorstep. Trusted technicians and affordable pricing.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">

              <button className="btn btn-primary btn-lg">
                Book AC Service
              </button>

              <button className="btn btn-outline-light btn-lg">
                View Services
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;