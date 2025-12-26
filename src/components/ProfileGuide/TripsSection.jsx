import React from "react";
import { Calendar, Users, CheckSquare } from "lucide-react";
import trip1 from "../../assets/trip1.jpg";
import trip2 from "../../assets/trip2.jpg";
import trip3 from "../../assets/trip3.jpg";

const tripsData = [
  {
    id: 1,
    img: trip1,
    title: "Sunset Beach Tour",
    place: "Agadir Beach",
    time: "18:00 - 20:00",
    people: 5,
  },
  {
    id: 2,
    img: trip2,
    title: "Kasbah Exploration",
    place: "Agadir Kasbah",
    time: "09:00 - 12:00",
    people: 8,
  },
  {
    id: 3,
    img: trip3,
    title: "Local Market Walk",
    place: "Souk El Had",
    time: "14:00 - 16:00",
    people: 10,
  },
];

const TripsSection = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tripsData.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={trip.img}
              alt={trip.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-bold mb-2">{trip.title}</h3>

              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Calendar size={16} />
                <span>{trip.time}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Users size={16} />
                <span>{trip.people} people</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <CheckSquare size={16} />
                <span>{trip.place}</span>
              </div>

              {/* Booking Button */}
              <button className="mt-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripsSection;
