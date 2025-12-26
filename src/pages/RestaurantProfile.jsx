import { useState } from "react";
import RestaurantBanner from "../components/ProfileRestaurant/RestaurantBanner";
import RestaurantInfo from "../components/ProfileRestaurant/RestaurantInfo";
import RestaurantNavbar from "../components/ProfileRestaurant/RestaurantNavbar";
import MenuSection from "../components/ProfileRestaurant/MenuSection";
import ReservationsSection from "../components/ProfileRestaurant/ReservationsSection";

const RestaurantProfile = () => {
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <div className="w-screen min-h-screen bg-white">
      {/* Banner */}
      <RestaurantBanner name="Le Marrakech" verified />

      {/* Info + Navbar */}
      <div className="px-6 md:px-12">
        <RestaurantInfo
          cuisine="Moroccan Cuisine"
          city="Marrakech"
          languages="Arabic, French, English"
          rating={4.8}
          openingHours="10:00 AM - 11:00 PM"
        />

        <RestaurantNavbar active={activeTab} setActive={setActiveTab} />

        {/* Conditional Content */}
        {activeTab === "menu" && <MenuSection />}
        {activeTab === "reservations" && <ReservationsSection />}
      </div>
    </div>
  );
};

export default RestaurantProfile;
