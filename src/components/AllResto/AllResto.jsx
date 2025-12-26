import React, { useState } from "react";
import RestoCard from "./RestoCard";
import "./AllResto.css";
import ghide1 from "../../assets/ghide1.jpg";
import guide2 from "../../assets/guide2.jpg";
import guide3 from "../../assets/guide3.jpg";
import guide4 from "../../assets/guide4.jpg";
import guide5 from "../../assets/guide5.jpg";


const restoData = [
  { id: 1, name: "Youssef El Amrani", city: "Fes", rating: 4.9, specialty: "old cities", languages: ["arabic", "french"], image: ghide1, topRated: true },
  { id: 2, name: "Amina Zahra", city: "Marrakech", rating: 4.8, specialty: "food", languages: ["english", "french"], image: guide2, topRated: true },
  { id: 3, name: "Hamza Ben Ali", city: "Rabat", rating: 4.9, specialty: "moden city", languages: ["arabic", "spanish"], image: guide3, topRated: false },
  { id: 4, name: "Salma Idrissi", city: "Casablanca", rating: 4.7, specialty: "fashion", languages: ["english", "french"], image: guide4, topRated: false },
  { id: 5, name: "Mehdi Touimi", city: "Tangier", rating: 4.6, specialty: "food", languages: ["arabic", "english"], image: guide5, topRated: false },
];

const AllResto = () => {
  const [city, setCity] = useState("All");
  const [category, setCategory] = useState("All");
  const [lang, setLang] = useState("All");

  const isFilterActive = city !== "All" || category !== "All" || lang !== "All";

  const resetFilters = () => {
    setCity("All");
    setCategory("All");
    setLang("All");
  };

  // 1. FILTERED RESULTS (Only for the top section)
  const filteredResults = restoData.filter((item) => {
    return (city === "All" || item.city === city) &&
           (category === "All" || item.specialty === category) &&
           (lang === "All" || item.languages.includes(lang.toLowerCase()));
  });

  return (
    <div className="container">
      {/* FILTER BAR SECTION */}
      <div className="filter-wrapper">
        <div className="filter-container">
          <select value={city} onChange={(e) => setCity(e.target.value)} className="custom-select">
            <option value="All">All Cities</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Fes">Fes</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Tangier">Tangier</option>
          </select>

          <select value={category} onChange={(e) => setCategory(e.target.value)} className="custom-select">
            <option value="All">All Categories</option>
            <option value="food">Food</option>
            <option value="old cities">Old Cities</option>
            <option value="moden city">Modern City</option>
            <option value="fashion">Fashion</option>
          </select>

          <select value={lang} onChange={(e) => setLang(e.target.value)} className="custom-select">
            <option value="All">All Languages</option>
            <option value="Arabic">Arabic</option>
            <option value="French">French</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>

        {isFilterActive && (
          <button className="clear-btn" onClick={resetFilters}>
            Clear All Filters
          </button>
        )}
      </div>

      {/* --- DYNAMIC SEARCH RESULTS SECTION --- */}
      {isFilterActive && (
        <div className="search-results-box">
          <h2 className="guides-title">Results for your search ({filteredResults.length})</h2>
          {filteredResults.length > 0 ? (
            <div className="guides-grid">
              {filteredResults.map(guide => <GuideCard key={`search-${guide.id}`} guide={guide} />)}
            </div>
          ) : (
            <div className="not-found-mini">
              <p>No guides match these specific filters. Try another combination.</p>
            </div>
          )}
          <hr className="section-divider" />
        </div>
      )}

      {/* --- STATIC CATEGORY SECTIONS (Always Visible) --- */}
      <div className="discovery-area">
        <Section title="Top Rated This Week" data={restoData.filter(g => g.topRated)} />
        <Section title="Gastronomy & Food" data={restoData.filter(g => g.specialty === "food")} />
        <Section title="Medina & Old City" data={restoData.filter(g => g.specialty === "old cities")} />
        <Section title="Modern Architecture" data={restoData.filter(g => g.specialty === "moden city")} />
      </div>
    </div>
  );
};

const Section = ({ title, data }) => {
  if (data.length === 0) return null;
  return (
    <section className="guides-section">
      <h2 className="guides-title">{title}</h2>
      <div className="guides-grid">
        {data.map(guide => <RestoCard key={guide.id} guide={guide} />)}
      </div>
    </section>
  );
};

export default AllResto;