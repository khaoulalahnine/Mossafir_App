// import React, { useState } from "react";

// const CityProfile = () => {
//   const [activeSection, setActiveSection] = useState("history");

//   return (
//     <div className="flex flex-col items-center">
//       {/* Fixed Header */}
//       <div className="sticky top-0 bg-white z-10 w-full shadow-md p-6 flex flex-col items-center">
//         <img
//           src="/path-to-city-image.jpg"
//           alt="City"
//           className="w-40 h-40 object-cover rounded-full mb-4"
//         />
//         <h1 className="text-3xl font-bold">Agadir</h1>
//         <p className="text-gray-600 text-center mt-2 max-w-xl">
//           A beautiful coastal city in Morocco, famous for its beaches and culture.
//         </p>

//         {/* Navigation Buttons */}
//         <div className="mt-4 flex gap-4 flex-wrap justify-center">
//           <button
//             onClick={() => setActiveSection("history")}
//             className={`px-4 py-2 rounded ${
//               activeSection === "history" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             City History
//           </button>
//           <button
//             onClick={() => setActiveSection("tradition")}
//             className={`px-4 py-2 rounded ${
//               activeSection === "tradition" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             City Tradition
//           </button>
//           <button
//             onClick={() => setActiveSection("food")}
//             className={`px-4 py-2 rounded ${
//               activeSection === "food" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             City Food
//           </button>
//           <button
//             onClick={() => setActiveSection("famous")}
//             className={`px-4 py-2 rounded ${
//               activeSection === "famous" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             Famous Places
//           </button>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl w-full p-6">
//         {activeSection === "history" && <HistoryContent />}
//         {activeSection === "tradition" && <TraditionContent />}
//         {activeSection === "food" && <FoodContent />}
//         {activeSection === "famous" && <FamousPlacesContent />}
//       </div>
//     </div>
//   );
// };

// // Example Section Components
// const HistoryContent = () => (
//   <div>
//     <h2 className="text-2xl font-semibold mb-4">City History</h2>
//     <p>Agadir has a rich history dating back centuries...</p>
//   </div>
// );

// const TraditionContent = () => (
//   <div>
//     <h2 className="text-2xl font-semibold mb-4">City Tradition</h2>
//     <p>The local traditions include music, crafts, and festivals...</p>
//   </div>
// );

// const FoodContent = () => (
//   <div>
//     <h2 className="text-2xl font-semibold mb-4">City Food</h2>
//     <p>Famous dishes include tagine, couscous, and local seafood...</p>
//   </div>
// );

// const FamousPlacesContent = () => (
//   <div>
//     <h2 className="text-2xl font-semibold mb-4">Famous Places</h2>
//     <p>Must-visit places include Agadir Beach, Kasbah, and Souk El Had...</p>
//   </div>
// );

// export default CityProfile;



import { useState } from "react";

import Footer from "../Components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import CityHeader from "../components/ExploreMore/CityHeader";
import HistorySection from "../components/ExploreMore/HistorySection";
import TraditionSection from "../components/ExploreMore/TraditionSection";
import FoodSection from "../components/ExploreMore/FoodSection";
import FamousPlacesSection from "../components/ExploreMore/FamousPlacesSection";

const CityProfile = () => {
  const [activeSection, setActiveSection] = useState("history");

  return (
    <>
    <div className="flex flex-col items-center">
      <CityHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="max-w-4xl w-full p-6">
        {activeSection === "history" && <HistorySection />}
        {activeSection === "tradition" && <TraditionSection />}
        {activeSection === "food" && <FoodSection />}
        {activeSection === "famous" && <FamousPlacesSection />}
      </div>
    </div>
     <NewsletterSection/>
      <Footer/>
      </>
  );
};

export default CityProfile;
