import { FiCheckCircle } from "react-icons/fi";
import restaurantBanner from "../../assets/resto.jpg";
import restaurantLogo from "../../assets/resto.jpg";

const RestaurantBanner = ({ name, verified }) => {
  return (
    <div className="relative h-56 w-full">
      <img src={restaurantBanner} alt="Banner" className="w-full h-full object-cover" />

      <div className="absolute -bottom-12 left-6">
        <img
          src={restaurantLogo}
          alt="Logo"
          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <div className="absolute bottom-4 left-36 flex items-center gap-2 text-white drop-shadow-md">
        <h2 className="text-2xl font-bold">{name}</h2>
        {verified && <FiCheckCircle className="text-blue-500" title="Verified Restaurant" />}
      </div>
    </div>
  );
};

export default RestaurantBanner;
