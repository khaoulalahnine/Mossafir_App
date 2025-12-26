import { AiOutlineAppstore, AiOutlineFlag } from "react-icons/ai";

const GuideNavbar = ({ active, setActive }) => {
  return (
    <div className="border-t border-gray-200 mt-4">
      <nav className="flex justify-around py-3 text-gray-600">
        <button
          onClick={() => setActive("posts")}
          className={`flex flex-col items-center gap-1 transition ${
            active === "posts" ? "text-orange-500" : ""
          }`}
        >
          <AiOutlineAppstore size={24} />
        </button>
        <button
          onClick={() => setActive("trips")}
          className={`flex flex-col items-center gap-1 transition ${
            active === "trips" ? "text-orange-500" : ""
          }`}
        >
          <AiOutlineFlag size={24} />
        </button>
      </nav>
    </div>
  );
};

export default GuideNavbar;
