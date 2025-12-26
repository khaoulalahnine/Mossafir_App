import beachImg from "../../assets/agadir.jpg";
import kasbahImg from "../../assets/agadir.jpg";
import soukImg from "../../assets/agadir.jpg";

const FamousPlacesSection = () => {
  return (
    <section className="space-y-12 animate-fadeIn">

      {/* Main Title */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Famous Places in Agadir
        </h2>
        <div className="w-20 h-1 bg-orange-500 rounded"></div>
      </div>

      {/* Place Card */}
      <div className="space-y-6">

        {/* Place 1 */}
        <div className="flex gap-6 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
          <img
            src={beachImg}
            alt="Agadir Beach"
            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Agadir Beach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A long stretch of golden sand ideal for walks, swimming, and
              enjoying Atlantic sunsets in a calm atmosphere.
            </p>
          </div>
        </div>

        {/* Place 2 */}
        <div className="flex gap-6 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
          <img
            src={kasbahImg}
            alt="Kasbah of Agadir"
            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Kasbah of Agadir Oufella
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A historic fortress offering panoramic views over the city and
              the ocean, symbolizing Agadir’s resilience.
            </p>
          </div>
        </div>

        {/* Place 3 */}
        <div className="flex gap-6 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
          <img
            src={soukImg}
            alt="Souk El Had"
            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Souk El Had
            </h3>
            <p className="text-gray-600 leading-relaxed">
              One of the largest traditional markets in Morocco, full of spices,
              crafts, and authentic local life.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FamousPlacesSection;
