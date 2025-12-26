import musicImg from "../../assets/agadir.jpg";
import craftsImg from "../../assets/agadir.jpg";

const TraditionSection = () => {
  return (
    <section className="space-y-16 animate-fadeIn">

      {/* Main Title */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Traditions of Agadir
        </h2>
        <div className="w-24 h-1 bg-orange-500 rounded"></div>
      </div>

      {/* Tradition 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Amazigh Music</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Agadir has a rich musical heritage with Amazigh rhythms, drums, and
            traditional songs performed during celebrations and festivals.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Music is a key part of local identity, bringing together communities
            and preserving ancient cultural expressions.
          </p>
        </div>

        <img
          src={musicImg}
          alt="Amazigh Music"
          className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
        />
      </div>

      {/* Tradition 2 */}
      <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
        <img
          src={craftsImg}
          alt="Amazigh Crafts"
          className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
        />

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Traditional Crafts</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Handmade Amazigh crafts include pottery, weaving, jewelry, and leatherwork.
            Local artisans preserve these techniques passed down through generations.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            These crafts are often sold in souks and markets, offering visitors
            a glimpse of Agadir’s authentic cultural life.
          </p>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-orange-600 mb-2">
          Key Traditions
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Amazigh music and dance festivals</li>
          <li>Handmade crafts and pottery</li>
          <li>Local culinary traditions</li>
          <li>Seasonal cultural celebrations</li>
        </ul>
      </div>

    </section>
  );
};

export default TraditionSection;
