import React, { useState } from "react";
import { Star, Bookmark } from "lucide-react";
import "./TopRatedRestaurants.css";

import resto1 from "../../assets/resto1.jpg";
import resto2 from "../../assets/resto2.jpg";
import resto3 from "../../assets/resto3.jpg";
import resto4 from "../../assets/resto4.jpg";

const restaurants = [
  {
    id: 1,
    name: "La Kasbah",
    city: "Marrakech",
    cuisine: "Moroccan Traditional",
    rating: 4.9,
    image: resto1,
  },
  {
    id: 2,
    name: "Riad Nomad",
    city: "Fes",
    cuisine: "Mediterranean Fusion",
    rating: 4.8,
    image: resto2,
  },
  {
    id: 3,
    name: "Le Jardin",
    city: "Casablanca",
    cuisine: "French & Moroccan",
    rating: 4.7,
    image: resto3,
  },
  {
    id: 4,
    name: "Essaouira Seafood",
    city: "Essaouira",
    cuisine: "Seafood",
    rating: 4.8,
    image: resto4,
  },
];

const TopRatedRestaurants = () => {
  const [saved, setSaved] = useState({});

  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="restaurants-section">
      <h2 className="restaurants-title">Top Rated Restaurants This Month</h2>

      <div className="restaurants-grid">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image"
            />

            {/* Save */}
            <button
              className="restaurant-save"
              onClick={() => toggleSave(restaurant.id)}
            >
              <Bookmark
                size={22}
                fill={saved[restaurant.id] ? "#ffd700" : "none"}
                color="#fff"
              />
            </button>

            {/* Overlay */}
            <div className="restaurant-overlay">
              <div className="restaurant-rating">
                <Star size={16} fill="#ffd700" color="#ffd700" />
                <span>{restaurant.rating}</span>
              </div>

              <h3>{restaurant.name}</h3>
              <p className="restaurant-city">{restaurant.city}</p>
              <p className="restaurant-cuisine">{restaurant.cuisine}</p>

              <button className="restaurant-btn">View Restaurant</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedRestaurants;
