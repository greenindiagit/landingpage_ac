import React, { useState } from "react";
import axios from "axios";
import apis from "../../api/api";

const ContactUs = () => {

  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {

    if (!phone) {
      alert("Please enter mobile number");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    try {
      const res = await axios.post(apis.enquiry.create, {
        phone: phone
      });

      console.log(res.data);

      alert("Mobile number saved successfully");

      setPhone("");

    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="gradient_contact_us-bg py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/img/contact_us/Book_Your_AC_Service_Now.png"
              alt="AC Service"
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

            <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">

              <div className="input-group" style={{ maxWidth: "360px" }}>
                <span className="input-group-text">IN +91</span>

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                className="btn btn-success px-4"
                onClick={handleSubmit}
              >
                Enquiry Now
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;