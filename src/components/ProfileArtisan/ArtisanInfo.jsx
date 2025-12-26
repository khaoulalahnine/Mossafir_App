import { FiMap } from "react-icons/fi";
import { AiOutlineFlag, AiOutlineGlobal } from "react-icons/ai";

const ArtisanInfo = ({ bio, language, city, artisanType }) => {
  return (
    <div className="mt-16 px-6 pb-6 space-y-2">
      {/* Bio */}
      <p className="text-gray-600">{bio}</p>

      {/* Info with icons */}
      <div className="flex flex-wrap gap-4 text-gray-700 mt-2">
        <span className="flex items-center gap-1">
          <AiOutlineGlobal /> {language}
        </span>
        <span className="flex items-center gap-1">
          <FiMap /> {city}
        </span>
        <span className="flex items-center gap-1">
          <AiOutlineFlag /> {artisanType}
        </span>
      </div>
    </div>
  );
};

export default ArtisanInfo;
