import React from "react";

const ContactUs = () => {
  return (
    <section className="gradient_contact_us-bg py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/img/contact_us/Book_Your_AC_Service_Now.png" // Apni image ka path yahan dein
              alt="Yes Madam Staff"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Book Your AC Service Now</h2>
            <p className="mb-4 text-muted">
              Enter your mobile number for booking and scheduling AC repair,
              service, or installation
            </p>

            {/* Phone input + button */}
           <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">

  <div className="input-group" style={{ maxWidth: "360px" }}>
    <span className="input-group-text">IN +91</span>

    <input
      type="tel"
      placeholder="Enter Mobile Number"
      className="form-control m-1"
    />
  </div>

  <button className="btn btn-danger px-4">
    Enquiry Now
  </button>

</div>

            {/* App Store Buttons */}
            {/* <div className="d-flex gap-3 mb-3 flex-wrap">
              <a href="#" aria-label="Download on Google Play">
                <img
                //   src="/assets/img/contact_us/Book_Your_AC_Service_Now.png"
                  alt="Google Play Store"
                //   style={{ height: "50px" }}
                />
              </a>
              
            </div> */}

            {/* Small note text */}
            {/* <p className="text-muted small">
              Or you can also access our services at{" "}
              <a href="https://greenindiateam.com/" target="_blank" rel="noreferrer">
              www.greenindiateam.com
              </a>{" "}
              from your mobile phone
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
