import essaouiraImg from "../../assets/essaouira.jpg";
import BackButton from "../ExploreMore/BackButton";


const CityHeader = ({ activeSection, setActiveSection }) => {
  return (
    <div className="relative z-10 w-full shadow-md">
        <div className="absolute top-4 left-4 z-20">
  <BackButton />
</div>


      {/* Background Image */}
      <div className="relative w-full h-[360px] overflow-hidden">
        {/* Blurred background */}
        <img
          src={essaouiraImg}
          alt="Essaouira background"
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
          {/* City avatar */}
          <img
            src={essaouiraImg}
            alt="City"
            className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg mb-4"
          />

          <h1 className="text-3xl font-bold">Agadir</h1>

          <p className="text-center mt-2 max-w-xl text-gray-200">
            A beautiful coastal city in Morocco, famous for its beaches and culture.
          </p>

          {/* Navigation Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            {[
              { id: "history", label: "City History" },
              { id: "tradition", label: "City Tradition" },
              { id: "food", label: "City Food" },
              { id: "famous", label: "Famous Places" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveSection(btn.id)}
                className={`px-5 py-2 rounded-full font-medium transition
                  ${
                    activeSection === btn.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-white/80 text-gray-800 hover:bg-orange-400 hover:text-white"
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityHeader;
