import { FiCheckCircle } from "react-icons/fi";
import bannerImg from "../../assets/artisan.jpg";
import avatarImg from "../../assets/artisan.jpg";

const ArtisanBanner = ({ name, verified }) => {
  return (
    <div className="relative h-56 w-screen">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute -bottom-12 left-6">
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      <div className="absolute bottom-4 left-36 flex items-center gap-2 text-white drop-shadow-md">
        <h2 className="text-2xl font-bold">{name}</h2>
        {verified && <FiCheckCircle className="text-blue-500" />}
      </div>
    </div>
  );
};

export default ArtisanBanner;
