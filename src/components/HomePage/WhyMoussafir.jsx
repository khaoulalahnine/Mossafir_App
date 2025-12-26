import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Shield, Globe, Heart, MapPin } from "lucide-react";

import verifiedImg from "../../assets/verified.jpg";
import communityImg from "../../assets/community.jpg";
import qualityImg from "../../assets/quality.jpg";
import culturalImg from "../../assets/cultural.jpg";
import adventureImg from "../../assets/adventure.jpg";
import localImg from "../../assets/local.jpg";

import "./WhyMoussafir.css";

const cards = [
  {
    id: 1,
    title: "Verified Authentic",
    description: "Every guide, trip, and artisan is verified for authenticity.",
    icon: <CheckCircle size={36} color="#ffd700" />,
    image: verifiedImg,
  },
  {
    id: 2,
    title: "Community First",
    description: "Empowering local communities is at the heart of what we do.",
    icon: <Users size={36} color="#ffd700" />,
    image: communityImg,
  },
  {
    id: 3,
    title: "Quality Guaranteed",
    description: "Experience only the best with our curated selection.",
    icon: <Shield size={36} color="#ffd700" />,
    image: qualityImg,
  },
  {
    id: 4,
    title: "Cultural Bridge",
    description: "Connecting travelers with Moroccan traditions and heritage.",
    icon: <Globe size={36} color="#ffd700" />,
    image: culturalImg,
  },
  {
    id: 5,
    title: "Adventure Awaits",
    description: "Unique experiences in every corner of Morocco.",
    icon: <MapPin size={36} color="#ffd700" />,
    image: adventureImg,
  },
  {
    id: 6,
    title: "Support Locals",
    description: "Your trips and bookings directly benefit local artisans.",
    icon: <Heart size={36} color="#ffd700" />,
    image: localImg,
  },
];

const WhyMoussafir = () => {
  const [offset, setOffset] = useState(0);

  // loop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % cards.length);
    }, 3000); // every 3s
    return () => clearInterval(interval);
  }, []);

  // rearranged array to simulate looping
  const loopedCards = [...cards, ...cards]; // duplicate for smooth loop

  return (
    <section className="why-container">
      <h2 className="why-title">Why Moussafir is your way to Morocco?</h2>
      <p className="why-description">
        We're not just another booking platform. We're a bridge between cultures,
        preserving traditions while empowering local communities.
      </p>

      <div className="why-carousel-wrapper">
        <motion.div
          className="why-carousel"
          animate={{ x: `-${offset * 33.33}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {loopedCards.map((card, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-card-img">
                <img src={card.image} alt={card.title} />
                <div className="why-card-icon">{card.icon}</div>
              </div>
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-desc">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMoussafir;
