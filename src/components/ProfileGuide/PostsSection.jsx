import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Bookmark } from "lucide-react"; // Lucide icon
import post1 from "../../assets/guide.jpg";
import post2 from "../../assets/guide2.jpg";
import post3 from "../../assets/guide3.jpg";

const postsData = [
  { id: 1, img: post1, caption: "Exploring the hidden alleys of Agadir." },
  { id: 2, img: post2, caption: "Sunset view from the Kasbah – unforgettable!" },
  { id: 3, img: post3, caption: "Local markets are full of colors and spices." },
];

const PostsSection = () => {
  const [likes, setLikes] = useState({});
  const [saved, setSaved] = useState({});

  const toggleLike = (id) => setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleSave = (id) => setSaved((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {postsData.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
          >
            {/* Post Image */}
            <img src={post.img} alt={`Post ${post.id}`} className="w-full h-64 object-cover" />

            {/* Caption */}
            <div className="px-4 py-2 flex flex-col flex-grow justify-between">
              <p className="text-gray-800 mb-2">{post.caption}</p>

              {/* Icons */}
              <div className="flex gap-4">
                {/* Like */}
                <button onClick={() => toggleLike(post.id)}>
                  {likes[post.id] ? (
                    <AiFillHeart size={24} className="text-red-500" />
                  ) : (
                    <AiOutlineHeart size={24} />
                  )}
                </button>

                {/* Save */}
                <button onClick={() => toggleSave(post.id)}>
                  <Bookmark
                    size={24}
                    fill={saved[post.id] ? "#FFD700" : "none"}
                    color={saved[post.id] ? "#FFD700" : "#000"}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsSection;
