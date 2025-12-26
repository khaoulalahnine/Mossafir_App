import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

import guideImg from "../../assets/ghide1.jpg";
import restoImg from "../../assets/resto.jpg";
import tripImg from "../../assets/trip.jpg";
import artisanImg from "../../assets/artisan.jpg";
import placesImg from "../../assets/places.jpg";

import airplane from "../../assets/airplane.png";
import car from "../../assets/car.png";
import "./HeroSection.css";

const slides = [
  {
    id: 1,
    topic: "Guide",
    image: guideImg,
    title: "Discover the Best Guides",
    description: "Let us guide you through Morocco's hidden gems",
    iconLink: "/guides",
    rightIcon: airplane,
    rightTitle: "Your personal guide awaits",
    rightSubtitle: "Explore smarter and safer with Moussafir",
    stats: [
      { number: "500+", title: "Verified Artisans" },
      { number: "1,200+", title: "Experiences" },
      { number: "90+", title: "Verified Guides" },
      { number: "98%", title: "Satisfaction" },
    ],
  },
  {
    id: 2,
    topic: "Restaurant",
    image: restoImg,
    title: "Taste Authentic Moroccan Cuisine",
    description: "Enjoy the best restaurants and local dishes",
    iconLink: "/restaurants",
    rightIcon: car,
    rightTitle: "A culinary journey you’ll love",
    rightSubtitle: "Savor smarter and safer with Moussafir",
    stats: [
      { number: "200+", title: "Top Restaurants" },
      { number: "3,000+", title: "Meals Served" },
      { number: "50+", title: "Food Guides" },
      { number: "97%", title: "Customer Satisfaction" },
    ],
  },
  {
    id: 3,
    topic: "Trip",
    image: tripImg,
    title: "Plan Your Perfect Trip",
    description: "All the trips you need for an unforgettable journey",
    iconLink: "/trips",
    rightIcon: airplane,
    rightTitle: "Adventure is calling",
    rightSubtitle: "Travel smarter and safer with Moussafir",
    stats: [
      { number: "150+", title: "Trip Packages" },
      { number: "80+", title: "Destinations" },
      { number: "100+", title: "Guided Tours" },
      { number: "99%", title: "Traveler Satisfaction" },
    ],
  },
  {
    id: 4,
    topic: "Artisan",
    image: artisanImg,
    title: "Discover Local Artisans",
    description: "Handcrafted treasures from Moroccan artisans",
    iconLink: "/artisan",
    rightIcon: car,
    rightTitle: "Support local craftsmanship",
    rightSubtitle: "Explore smarter and safer with Moussafir",
    stats: [
      { number: "400+", title: "Verified Artisans" },
      { number: "1,500+", title: "Handcrafted Products" },
      { number: "75+", title: "Workshops" },
      { number: "96%", title: "Customer Satisfaction" },
    ],
  },
  {
    id: 5,
    topic: "Places",
    image: placesImg,
    title: "Explore Morocco's Beautiful Places",
    description: "From mountains to desert, beaches and cities",
    iconLink: "/places",
    rightIcon: airplane,
    rightTitle: "Your journey starts here",
    rightSubtitle: "Travel smarter and safer with Moussafir",
    stats: [
      { number: "120+", title: "Destinations" },
      { number: "2,000+", title: "Trips Booked" },
      { number: "100+", title: "Guides Available" },
      { number: "98%", title: "Traveler Satisfaction" },
    ],
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* LEFT IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="hero-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={slide.image} alt={slide.title} className="hero-image" />
            
            {/* Icon Button */}
            <a href={slide.iconLink} className="hero-icon-button">
              <ArrowRightCircle size={36} color="#fff" />
              <span>Explore</span>
            </a>

            {/* Image Text */}
            <div className="hero-image-text">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT SIDE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-text"}
            className="hero-right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={slide.rightIcon} alt="icon" className="hero-right-icon" />
            <p className="hero-right-title">{slide.rightTitle}</p>
            <h2 className="hero-right-subtitle">
              {slide.rightSubtitle.split(" ").map((word, idx) =>
                ["smarter", "safer"].includes(word.toLowerCase()) ? (
                  <span key={idx} className="highlight">{word} </span>
                ) : (
                  word + " "
                )
              )}
            </h2>
            <p className="hero-right-extra">{slide.description}</p>
            <button className="hero-btn">Welcome to your trip</button>

            {/* Statistics at bottom */}
            <div className="hero-right-stats">
              {slide.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
                >
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-title">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
