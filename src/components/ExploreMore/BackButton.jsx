import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 rounded-full
                 bg-white/80 text-gray-800 shadow-md
                 hover:bg-orange-500 hover:text-white transition"
    >
      ← Back
    </button>
  );
};

export default BackButton;
