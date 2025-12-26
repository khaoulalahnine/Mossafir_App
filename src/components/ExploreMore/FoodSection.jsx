import tagineImg from "../../assets/agadir.jpg";
import couscousImg from "../../assets/agadir.jpg";
import seafoodImg from "../../assets/agadir.jpg";

const FoodSection = () => {
  return (
    <section className="space-y-12 animate-fadeIn">

      {/* Main Title */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Culinary Delights of Agadir
        </h2>
        <div className="w-20 h-1 bg-orange-500 rounded"></div>
      </div>

      {/* Dishes Grid */}
      <div className="space-y-6">

        {/* Dish 1 */}
        <div className="flex gap-6 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
          <img
            src={tagineImg}
            alt="Tagine"
            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Tagine
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A slow-cooked Moroccan stew made with meat, vegetables, and aromatic
              spices, traditionally served in a clay dish called a tagine.
            </p>
          </div>
        </div>

        {/* Dish 2 */}
        <div className="flex gap-6 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
          <img
            src={couscousImg}
            alt="Couscous"
            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Couscous
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Steamed semolina served with a variety of vegetables, meat, or seafood,
              seasoned with Moroccan spices for a rich and hearty flavor.
            </p>
          </div>
        </div>

        {/* Dish 3 */}
        <div className="flex gap-6 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
          <img
            src={seafoodImg}
            alt="Seafood"
            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Local Seafood
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Freshly caught seafood from the Atlantic coast, including fish, shrimp,
              and calamari, often grilled or cooked with traditional Moroccan spices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoodSection;
