import React from "react";
import TravelCard from "./TravelCard";
import "./Carousel.css";
import rabatImg from "../../assets/rabat.jpg";
import marrakechImg from "../../assets/marrakech.jpg";
import fesImg from "../../assets/fes.jpg";
import essaouiraImg from "../../assets/essaouira.jpg";


const cardData = [
  {
    title: "Rabat",
    price: 710,
    description:
      "Discover Morocco’s calm capital with history, ocean views, and elegance.",
    tags: ["Luxury Stay", "2 Days"],
    image: rabatImg,
  },
  {
    title: "Marrakech",
    price: 680,
    description:
      "Vibrant souks, colors, riads, and unforgettable cultural energy.",
    tags: ["Top Rated", "5 Days"],
    image: marrakechImg,
  },
  {
    title: "Fés",
    price: 950,
    description:
      "Timeless traditions inside the oldest and richest medina.",
    tags: ["City Escape", "Weekend"],
    image: fesImg,
  },
  {
   title: "Essaouira",
    price: 520,
    description:
      "The blue pearl of Morocco, calm streets and mountain air.",
    tags: ["Nature", "Relax"],
    image: essaouiraImg,
  }
];

const Carousel = () => {
  return (
    <section className="carousel-wrapper">
      <h2 className="carousel-title">
        Top Rated Places for This Month
      </h2>

      <div className="carousel-grid">
        {cardData.map((card, index) => (
          <TravelCard key={index} data={card} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
