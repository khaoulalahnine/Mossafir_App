import { FiCheckCircle } from "react-icons/fi";
import guideBanner from "../../assets/guide.jpg";
import guideAvatar from "../../assets/guide.jpg";

const GuideBanner = ({ name, verified }) => {
  return (
    <div className="relative h-56 w-screen">
      {/* Banner */}
      <img
        src={guideBanner}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Avatar */}
      <div className="absolute -bottom-12 left-6">
        <img
          src={guideAvatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      {/* Name + Verified */}
      <div className="absolute bottom-4 left-36 flex items-center gap-2 text-white drop-shadow-md">
        <h2 className="text-2xl font-bold">{name}</h2>
        {verified && (
          <FiCheckCircle
            className="text-blue-500"
            title="Verified Guide"
          />
        )}
      </div>
    </div>
  );
};

export default GuideBanner;
