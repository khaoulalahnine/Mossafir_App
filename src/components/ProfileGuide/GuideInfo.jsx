import { FiCamera, FiMap } from "react-icons/fi";
import { AiOutlineFlag } from "react-icons/ai";

const GuideInfo = ({ bio, language, city, type }) => {
  return (
    <div className="mt-16 px-6 pb-6 space-y-2">
      <p className="text-gray-600">{bio}</p>
      <div className="flex flex-wrap gap-4 text-gray-700 mt-2">
        <span className="flex items-center gap-1"><FiCamera /> {language}</span>
        <span className="flex items-center gap-1"><FiMap /> {city}</span>
        <span className="flex items-center gap-1"><AiOutlineFlag /> {type}</span>
      </div>
    </div>
  );
};

export default GuideInfo;
