import { AiOutlineAppstore, AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";

const RestaurantNavbar = ({ active, setActive }) => {
  return (
    <div className="border-t border-gray-200 mt-4">
      <nav className="flex justify-around py-3 text-gray-600">
        <button
          onClick={() => setActive("menu")}
          className={`flex flex-col items-center gap-1 transition ${active === "menu" ? "text-orange-500" : ""}`}
        >
          <AiOutlineAppstore size={24} />
        </button>
        <button
          onClick={() => setActive("reservations")}
          className={`flex flex-col items-center gap-1 transition ${active === "reservations" ? "text-orange-500" : ""}`}
        >
          <AiOutlineClockCircle size={24} />
        </button>
       
      </nav>
    </div>
  );
};

export default RestaurantNavbar;
