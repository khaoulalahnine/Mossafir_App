import workshop1 from "../../assets/artisan1.jpg";
import workshop2 from "../../assets/artisan2.jpg";
import workshop3 from "../../assets/artisan3.jpg"; // Add a 3rd workshop image

const workshopsData = [
  {
    id: 1,
    img: workshop1,
    title: "Pottery Workshop",
    description: "Learn traditional pottery techniques.",
    time: "10:00 AM - 1:00 PM",
    location: "Safi",
  },
  {
    id: 2,
    img: workshop2,
    title: "Carpet Weaving Workshop",
    description: "Discover Moroccan carpet weaving.",
    time: "2:00 PM - 5:00 PM",
    location: "Marrakech",
  },
  {
    id: 3,
    img: workshop3,
    title: "Leather Craft Workshop",
    description: "Master traditional Moroccan leatherwork.",
    time: "11:00 AM - 2:00 PM",
    location: "Fez",
  },
];

const WorkshopsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 p-6">
      {workshopsData.map((workshop) => (
        <div
          key={workshop.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
        >
          {/* Workshop Image */}
          <img
            src={workshop.img}
            alt={workshop.title}
            className="w-full h-48 object-cover"
          />

          {/* Info */}
          <div className="px-4 py-3 flex flex-col flex-grow justify-between">
            <h3 className="text-lg font-semibold">{workshop.title}</h3>
            <p className="text-gray-600 mt-1">{workshop.description}</p>
            <p className="text-gray-500 text-sm mt-1">
              {workshop.time} | {workshop.location}
            </p>

            {/* Book button */}
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Book Workshop
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkshopsSection;
