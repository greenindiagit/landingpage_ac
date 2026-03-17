import React from "react";

const ServiceBanner = () => {
  return (
    <section className="service-banner">
      <div className="container">
        <img
          src="/assets/img/services/service_banner.png"
          alt="Service Banner"
          className=" banner-image"
          onClick={() => (window.location.href = "https://greenindiateam.com/services/ac-repair-service-delhi-ncr")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </section>
  );
};

export default ServiceBanner;
