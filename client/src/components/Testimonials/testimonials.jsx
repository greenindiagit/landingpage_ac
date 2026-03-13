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
  {
    id: 4,
    name: "Amit Kumar",
    location: "Gurgaon, India",
    review:
      "Great experience. Booking was easy and the technician did a fantastic job.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: "Amit Kumar",
    location: "Gurgaon, India",
    review:
      "Great experience. Booking was easy and the technician did a fantastic job.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    name: "Amit Kumar",
    location: "Gurgaon, India",
    review:
      "Great experience. Booking was easy and the technician did a fantastic job.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    name: "Amit Kumar",
    location: "Gurgaon, India",
    review:
      "Great experience. Booking was easy and the technician did a fantastic job.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials  ">
      <div className="container">
        <div className="banner_section">
          <div className="banner_section text-center mb-4">
            <img
              src="/assets/img/video/User_Ratings_Glf.gif"
              alt="User Ratings"
              className="img-fluid"
            />
          </div>
        </div>
        {/* <h2 className="text-center mb-3">Customer Testimonials</h2>
        <p className="text-center text-secondary mb-4">
          See what our customers say about our AC services
        </p> */}

        <div className="testimonials-row-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{ minWidth: "300px" }}
            >
              <div className="card-body d-flex flex-column text-center">
                <p className="text-secondary">
                  "{item.review}"
                </p>
                <div className="mb-2">{item.rating}</div>
                <h5 className="mb-1">{item.name}</h5>
                <span className="text-muted">{item.location}</span>
              </div>
            </div>
          ))}

          {/* Duplicate the testimonials to make smooth infinite scroll */}
          {testimonials.map((item, index) => (
            <div
              key={"dup-" + index}
              className="card flex-shrink-0"
              style={{ minWidth: "300px" }}
            >
              <div className="card-body d-flex flex-column text-center">
                <p className="text-secondary mb-2 flex-grow-1">
                  "{item.review}"
                </p>
                <div className="mb-2">{item.rating}</div>
                <h5 className="mb-1">{item.name}</h5>
                <span className="text-muted">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
