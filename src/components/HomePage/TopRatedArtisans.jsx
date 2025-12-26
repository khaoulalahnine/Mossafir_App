import React, { useState } from "react";
import { Star, Bookmark } from "lucide-react";
import "./TopRatedArtisans.css";

import artisan1 from "../../assets/artisan1.jpg";
import artisan2 from "../../assets/artisan2.jpg";
import artisan3 from "../../assets/artisan3.jpg";
import artisan4 from "../../assets/artisan4.jpg";

const artisans = [
  {
    id: 1,
    name: "Hassan El Maalem",
    city: "Fes",
    rating: 4.9,
    specialty: "Traditional Zellige & Mosaic",
    image: artisan1,
  },
  {
    id: 2,
    name: "Khadija Benyoussef",
    city: "Marrakech",
    rating: 4.8,
    specialty: "Handwoven Rugs & Textiles",
    image: artisan2,
  },
  {
    id: 3,
    name: "Abdelilah Amrani",
    city: "Safi",
    rating: 4.9,
    specialty: "Authentic Moroccan Pottery",
    image: artisan3,
  },
  {
    id: 4,
    name: "Amina Idrissi",
    city: "Tétouan",
    rating: 4.7,
    specialty: "Leather & Handmade Bags",
    image: artisan4,
  },
];

const TopRatedArtisans = () => {
  const [saved, setSaved] = useState({});

  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="artisans-section">
      <h2 className="artisans-title">Top Rated Artisans This Month</h2>

      <div className="artisans-grid">
        {artisans.map((artisan) => (
          <div className="artisan-card" key={artisan.id}>
            <img
              src={artisan.image}
              alt={artisan.name}
              className="artisan-image"
            />

            {/* Save */}
            <button
              className="artisan-save"
              onClick={() => toggleSave(artisan.id)}
            >
              <Bookmark
                size={22}
                fill={saved[artisan.id] ? "#ffd700" : "none"}
                color="#fff"
              />
            </button>

            {/* Overlay */}
            <div className="artisan-overlay">
              <div className="artisan-rating">
                <Star size={16} fill="#ffd700" color="#ffd700" />
                <span>{artisan.rating}</span>
              </div>

              <h3>{artisan.name}</h3>
              <p className="artisan-city">{artisan.city}</p>
              <p className="artisan-specialty">{artisan.specialty}</p>

              <button className="artisan-btn">View Artisan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedArtisans;
