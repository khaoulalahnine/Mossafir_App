import historyImg1 from "../../assets/essaouira.jpg";
import historyImg2 from "../../assets/essaouira.jpg";

const HistorySection = () => {
  return (
    <section className="space-y-16 animate-fadeIn">

      {/* Main Title */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          History of Agadir
        </h2>
        <div className="w-24 h-1 bg-orange-500 rounded"></div>
      </div>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            Ancient Origins
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Agadir’s history dates back to ancient times when Amazigh tribes
            settled along the Atlantic coast. Thanks to its strategic location,
            the city became an important commercial hub connecting Africa,
            Europe, and the Mediterranean world.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Archaeological evidence shows that the region was inhabited long
            before modern civilizations, with trade routes shaping its early
            development and cultural identity.
          </p>
        </div>

        <img
          src={historyImg1}
          alt="Ancient Agadir"
          className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
        />
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
        <img
          src={historyImg2}
          alt="Kasbah of Agadir"
          className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
        />

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            The Kasbah Era
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Kasbah of Agadir Oufella was built in the 16th century to protect
            the city from invasions. It quickly became a symbol of power and
            resilience, overlooking the ocean and the surrounding lands.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Despite being severely damaged by the 1960 earthquake, the Kasbah
            remains a historical landmark that reflects the strength and spirit
            of the city.
          </p>
        </div>
      </div>

      {/* Timeline / Highlight Box */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-orange-600 mb-2">
          Key Historical Moments
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ancient Amazigh settlements</li>
          <li>Portuguese occupation in the 16th century</li>
          <li>Reconstruction after the 1960 earthquake</li>
          <li>Modern transformation into a tourist destination</li>
        </ul>
      </div>

    </section>
  );
};

export default HistorySection;
