import { AiOutlineAppstore } from "react-icons/ai";
import { FaStoreAlt, FaHammer } from "react-icons/fa";

const ArtisanNavbar = ({ active, setActive }) => {
  return (
    <div className="border-t border-gray-200 mt-4">
      <nav className="flex justify-around py-3 text-gray-600">
        {/* Posts */}
        <button
          onClick={() => setActive("posts")}
          className={`flex flex-col items-center gap-1 transition ${
            active === "posts" ? "text-orange-500" : ""
          }`}
        >
          <AiOutlineAppstore size={24} />
        </button>

        {/* Workshops */}
        <button
          onClick={() => setActive("workshops")}
          className={`flex flex-col items-center gap-1 transition ${
            active === "workshops" ? "text-orange-500" : ""
          }`}
        >
          <FaHammer size={24} />
        </button>

        {/* Products */}
        <button
          onClick={() => setActive("products")}
          className={`flex flex-col items-center gap-1 transition ${
            active === "products" ? "text-orange-500" : ""
          }`}
        >
          <FaStoreAlt size={24} />
        </button>
      </nav>
    </div>
  );
};

export default ArtisanNavbar;
