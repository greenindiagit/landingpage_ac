import React from "react";

const achievements = [
  {
    id: 1,
     img: "/assets/img/achievement/Professionals.png",
    number: "100+",
    text: "Professionals",
  },
  {
    id: 2,
    img: "/assets/img/achievement/Bookings.png",
    number: "10k+",
    text: "Bookings Completed",
  },
  {
    id: 3,
   img: "/assets/img/achievement/City-states.png",
    number: "10+",
    text: "Cities States",
  },
  {
    id: 4,
    img: "/assets/img/achievement/Star rating.png",
    number: "4.9",
    text: "Star Rating",
  },
];

const Achievements = () => {
  return (
    <section className="achievements py-5 ">
      <div className="container text-center">

        <h2 className="mb-5 fw-bold">Performance highlights</h2>

        <div className="row g-4">

          {achievements.map((item) => (
            <div key={item.id} className="col-3 col-md-3 col-lg">

              <div className="achievement-card">

                <div className="icon-circle ">
                    <img
                  src={item.img}
                  alt={item.title}
                  className="img_icon_achievement"
                />
                </div>

                <h3 className="fw-bold mt-3">{item.number}</h3>

                <p className="d-lg-block d-none text-secondary">{item.text}</p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Achievements;