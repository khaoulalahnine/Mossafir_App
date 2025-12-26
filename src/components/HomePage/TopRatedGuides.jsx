import React, { useState } from "react";
import { Star, Bookmark } from "lucide-react";
import "./TopRatedGuides.css";

import ghide1 from "../../assets/ghide1.jpg";
import guide2 from "../../assets/guide2.jpg";
import guide3 from "../../assets/guide3.jpg";
import guide4 from "../../assets/guide4.jpg";

const guides = [
  {
    id: 1,
    name: "Youssef El Amrani",
    city: "Fes",
    rating: 4.9,
    specialty: "Cultural & Historical Tours",
    image: ghide1,
  },
  {
    id: 2,
    name: "Amina Zahra",
    city: "Marrakech",
    rating: 4.8,
    specialty: "Food & Medina Walks",
    image: guide2,
  },
  {
    id: 3,
    name: "Hamza Ben Ali",
    city: "Rabat",
    rating: 4.9,
    specialty: "Royal & Modern City Tours",
    image: guide3,
  },
  {
    id: 4,
    name: "Salma Idrissi",
    city: "Chefchaouen",
    rating: 4.7,
    specialty: "Nature & Photography",
    image: guide4,
  },
];

const TopRatedGuides = () => {
  const [saved, setSaved] = useState({});

  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="guides-section">
      <h2 className="guides-title">Top Rated Guides This Month</h2>

      <div className="guides-grid">
        {guides.map((guide) => (
          <div className="guide-card" key={guide.id}>
            <img src={guide.image} alt={guide.name} className="guide-image" />

            <button
              className="guide-save"
              onClick={() => toggleSave(guide.id)}
            >
              <Bookmark
                size={22}
                fill={saved[guide.id] ? "#ffd700" : "none"}
                color="#fff"
              />
            </button>

            <div className="guide-overlay">
              <div className="guide-rating">
                <Star size={16} fill="#ffd700" color="#ffd700" />
                <span>{guide.rating}</span>
              </div>

              <h3>{guide.name}</h3>
              <p className="guide-city">{guide.city}</p>
              <p className="guide-specialty">{guide.specialty}</p>

              <button className="guide-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedGuides;
