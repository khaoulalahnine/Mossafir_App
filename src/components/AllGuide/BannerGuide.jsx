import React, { useState, useEffect } from "react";
import ghide1 from "../../assets/ghide1.jpg";
import guide from "../../assets/guide.jpg";
import guide2 from "../../assets/guide2.jpg";
import trip1 from "../../assets/trip1.jpg";




const slides = [
  {
    image: ghide1,
    value: "Safety",
  },
  {
    image: guide,
    value: "Creativity",
  },
  {
    image:guide2,
    value: "Fun",
  },
  {
    image: trip1,
    value: "Adventure",
  },
];

const BannerGuide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        margin:"40px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #eea11cff 0%, #e85f0aff 100%)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        overflow: "hidden",
        gap: "50px",
      }}
    >
      {/* Left: Carousel */}
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "200px",
          borderRadius: "10px",
          overflow: "hidden",
          flexShrink: 0,
          boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: index === currentSlide ? "relative" : "absolute",
              top: 0,
              left: index === currentSlide ? 0 : "100%",
              width: "100%",
              height: "100%",
              transition: "all 1s ease-in-out",
            }}
          >
            <img
              src={slide.image}
              alt={slide.value}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            {/* Value overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                padding: "10px 20px",
                background: "rgba(255, 247, 247, 0.76)",
                color: "#000000ff",
                borderRadius: "15px",
                fontWeight: "bold",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              {slide.value}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Text */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight:"bold",
            marginBottom: "20px",
            color: "#ebe7e7ff",
            lineHeight: "1.2",
          }}
        >
          Explore the real Morocco with your prefered Guide
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#e9e0e0ff",
            maxWidth: "700px",
            lineHeight: "1.6",
            animation: "fadeInText 2s ease-in",
          }}
        >
          We offer creative guides speaking all languages to make your journeys
          unforgettable. Adventure, safety, and fun await you on every trip!
        </p>
      </div>

      {/* Animation keyframes inside JSX */}
      <style>
        {`
          @keyframes fadeInText {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default BannerGuide;
