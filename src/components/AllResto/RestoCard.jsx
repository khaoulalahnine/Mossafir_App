import React, { useState } from "react";
import { Star, Bookmark, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const RestoCard = ({ guide }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="guide-card">
      <img src={guide.image} alt={guide.name} className="guide-image" />
      
      <button className="guide-save" onClick={() => setSaved(!saved)}>
        <Bookmark
          size={20}
          fill={saved ? "#ffd700" : "none"}
          color={saved ? "#ffd700" : "#fff"}
        />
      </button>

      <div className="guide-overlay">
        <div className="guide-rating">
          <Star size={14} fill="#ffd700" color="#ffd700" />
          <span>{guide.rating}</span>
        </div>

        <h3>{guide.name}</h3>
        <p className="guide-city">{guide.city}</p>
        <p className="guide-specialty">{guide.specialty}</p>
        
        <div className="guide-languages">
          <Globe size={12} />
          <span>{guide.languages.join(", ")}</span>
        </div>
            <Link to="/restaurant/:id">
           <button className="guide-btn">View Profile</button>
    </Link>
      </div>
    </div>
  );
};

export default RestoCard;