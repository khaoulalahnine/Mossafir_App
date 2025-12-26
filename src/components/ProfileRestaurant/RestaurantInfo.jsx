import { FiMapPin, FiClock } from "react-icons/fi";
import { AiOutlineFlag } from "react-icons/ai";

const RestaurantInfo = ({ cuisine, city, languages, rating, openingHours }) => {
  return (
    <div className="mt-16 px-6 pb-6 space-y-2">
      <div className="flex flex-wrap gap-4 text-gray-700 mt-2">
        <span className="flex items-center gap-1"><AiOutlineFlag /> {cuisine}</span>
        <span className="flex items-center gap-1"><FiMapPin /> {city}</span>
        <span className="flex items-center gap-1"><FiClock /> {openingHours}</span>
        <span className="flex items-center gap-1">{languages}</span>
      </div>
    </div>
  );
};

export default RestaurantInfo;
