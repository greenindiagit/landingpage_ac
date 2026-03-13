import React from "react";

const ServiceBanner = () => {
  return (
    <section className="service-banner">
      <div className="container">
        <img
          src="/assets/img/services/service_banner.png"
          alt="Service Banner"
          className=" banner-image"
        />
      </div>
      {/* <div className="banner-content position-absolute top-50 start-50 translate-middle text-center px-3">
        <h1 className="display-4 fw-bold mb-3">Premium AC Repair Services</h1>
        <p className="lead mb-4">
          Fast, reliable & affordable AC repair solutions at your doorstep.
        </p>
        <button className="btn btn-primary btn-lg">Book Now</button>
      </div> */}
    </section>
  );
};

export default ServiceBanner;
