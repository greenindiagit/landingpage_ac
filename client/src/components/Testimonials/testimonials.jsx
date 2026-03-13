import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi, India",
    review:
      "Excellent AC repair service. The technician arrived on time and fixed the issue quickly.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Priya Verma",
    location: "Noida, India",
    review:
      "Very professional service and affordable pricing. Highly recommended!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Gurgaon, India",
    review:
      "Great experience. Booking was easy and the technician did a fantastic job.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="text-center mb-4">
          <img
            src="/assets/img/video/User_Ratings_Glf.gif"
            alt="User Ratings"
            className="img-fluid"
          />
        </div>

        <div className="testimonial-wrapper">

          <div className="testimonial-track">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="testimonial-card">

                <p className="review">"{item.review}"</p>

                <div className="rating">{item.rating}</div>

                <h5>{item.name}</h5>

                <span className="location">{item.location}</span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;