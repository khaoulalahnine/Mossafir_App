import React, { useState } from "react";
import { Star, Bookmark } from "lucide-react";

const RestoProfile = () => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="resto-profile bg-gray-50 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
      {/* Banner */}
      <div className="relative h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600 text-xl font-semibold">Restaurant Banner</span>
        <div className="absolute top-4 right-4">
          <button onClick={() => setSaved(!saved)}>
            <Bookmark
              size={24}
              fill={saved ? "#FFD700" : "none"}
              color={saved ? "#FFD700" : "#fff"}
            />
          </button>
        </div>
      </div>

      {/* Avatar & Basic Info */}
      <div className="flex flex-col items-center -mt-16 px-6 text-center">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Logo</span>
        </div>
        <h1 className="text-3xl font-bold mt-4">Restaurant Name</h1>
        <p className="text-gray-600 mt-1">Cuisine Type</p>

        <div className="flex items-center gap-2 mt-2">
          <Star size={16} fill="#FFD700" color="#FFD700" />
          <span className="text-gray-700">4.5 / 5</span>
          <span className="text-gray-500">· City</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
            Book a Table
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
            Follow
          </button>
        </div>
      </div>

      {/* About & Info */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec est at libero luctus fermentum.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+212 XXX XXX XXX</p>
          </div>
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p>10:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>

      {/* Menu / Gallery */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-4">Menu Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-2 flex flex-col items-center">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-2 flex items-center justify-center">
                <span className="text-gray-500">Dish {i}</span>
              </div>
              <h3 className="font-bold">Dish Name</h3>
              <p className="text-gray-600">$XX</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestoProfile;
