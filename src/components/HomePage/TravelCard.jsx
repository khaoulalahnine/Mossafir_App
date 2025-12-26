import React, { useState } from "react";
import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

import "./TravelCard.css";

const TravelCard = ({ data }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card-container">
      {/* Background Image */}
      <img src={data.image} alt={data.title} className="card-bg" />

      {/* Save Icon */}
      <div
        className="save-icon"
        onClick={() => setSaved(!saved)}
      >
        <Bookmark
          size={20}
          fill={saved ? "#FFD700" : "none"}
          color={saved ? "#FFD700" : "#fff"}
        />
      </div>

      {/* Content Overlay */}
      <div className="card-overlay">
        <div className="card-header">
          <h3 className="card-title">{data.title}</h3>
          <span className="card-price">${data.price}</span>
        </div>

        <p className="card-description">{data.description}</p>

        <div className="card-tags">
          {data.tags.map((tag, index) => (
            <span key={index} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
         <Link to="/city/:cityName">
  <button className="reserve-btn">Explore More</button>
    </Link>
     </div>
    </div>
  );
};

export default TravelCard;
