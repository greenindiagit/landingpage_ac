import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("Booking Submitted Successfully!");
    // Optionally reset form:
    // setFormData({ name: "", phone: "", service: "", date: "", address: "" });
  };

  return (
    <section className="booking py-5 text-center">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="mb-3">Book AC Service</h2>
        <p className="text-secondary mb-4">Fill the form to schedule your service</p>

        <form onSubmit={handleSubmit} className="text-start">

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select Service</option>
              <option value="AC Repair">AC Repair</option>
              <option value="AC Installation">AC Installation</option>
              <option value="AC Gas Filling">AC Gas Filling</option>
              <option value="AC Maintenance">AC Maintenance</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <textarea
              name="address"
              placeholder="Your Address"
              rows="3"
              required
              value={formData.address}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;