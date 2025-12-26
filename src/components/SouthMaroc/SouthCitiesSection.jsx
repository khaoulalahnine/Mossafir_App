import React from "react";
import TravelCard from "../HomePage/TravelCard";
import "./SouthCitiesSection.css";

import agadirImg from "../../assets/agadir.jpg";
import ouarzazateImg from "../../assets/ouarzazate.jpg";
import zagoraImg from "../../assets/zagora.jpg";
import laayouneImg from "../../assets/laayoune.jpg";
import dakhlaImg from "../../assets/dakhla.jpg";

const southCities = [
  {
    title: "Agadir",
    price: 620,
    description:
      "Sunny beaches, surf vibes, and a relaxed coastal lifestyle.",
    tags: ["Beach", "Relax"],
    image: agadirImg,
  },
  {
    title: "Ouarzazate",
    price: 540,
    description:
      "Gateway to the desert, famous kasbahs and cinema landscapes.",
    tags: ["Desert", "Culture"],
    image: ouarzazateImg,
  },
  {
    title: "Zagora",
    price: 480,
    description:
      "A peaceful desert town with palm groves and Sahara routes.",
    tags: ["Sahara", "Adventure"],
    image: zagoraImg,
  },
  {
    title: "Laâyoune",
    price: 500,
    description:
      "The heart of the Moroccan Sahara with authentic Sahrawi culture.",
    tags: ["Sahara", "Local Life"],
    image: laayouneImg,
  },
  {
    title: "Dakhla",
    price: 750,
    description:
      "Lagoon paradise, kitesurf capital, and ocean tranquility.",
    tags: ["Ocean", "Kitesurf"],
    image: dakhlaImg,
  },
];

const SouthCitiesSection = () => {
  return (
    <section className="south-cities-section">
      <h2 className="south-cities-title">
        Explore Cities of South Morocco
      </h2>

      <div className="south-cities-grid">
        {southCities.map((city, index) => (
          <TravelCard key={index} data={city} />
        ))}
      </div>
    </section>
  );
};

export default SouthCitiesSection;
