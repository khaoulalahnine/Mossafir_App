import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TripMemories.css";

import trip1 from "../../assets/trip1.jpg";
import trip2 from "../../assets/trip2.jpg";
import trip3 from "../../assets/trip3.jpg";

const memories = [
  {
    id: 1,
    image: trip1,
    place: "Atlas Mountains",
    date: "March 2024",
    guide: {
      name: "Youssef A.",
      profile: "/guides/youssef-a",
    },
    comment: "An unforgettable experience. Everything was well organized and authentic.",
    user: "Sarah M.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 2,
    image: trip2,
    place: "Sahara Desert",
    date: "February 2024",
    guide: {
      name: "Hassan R.",
      profile: "/guides/hassan-r",
    },
    comment: "The most magical night of my life. Truly felt safe and guided.",
    user: "Daniel K.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 3,
    image: trip3,
    place: "Chefchaouen",
    date: "January 2024",
    guide: {
      name: "Amina L.",
      profile: "/guides/amina-l",
    },
    comment: "Every corner had a story. Loved the human touch of Moussafir.",
    user: "Laura P.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const TripMemories = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % memories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const memory = memories[current];

  return (
    <section className="memories-container">
      {/* SECTION TITLE */}
      <h2 className="memories-title">Real Memories</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={memory.id}
          className="memory-card"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* IMAGE */}
          <div className="memory-image-wrapper">
            <img src={memory.image} alt={memory.place} />
            <div className="memory-meta">
              <span>{memory.place}</span>
              <span>{memory.date}</span>
            </div>
          </div>

          {/* COMMENT */}
          <div className="memory-comment">
            <p className="comment-text">“{memory.comment}”</p>

            <div className="comment-user">
              <img src={memory.avatar} alt={memory.user} />

              <div>
                <strong>{memory.user}</strong>

                {/* CLICKABLE GUIDE */}
                <a
                  href={memory.guide.profile}
                  className="guide-link"
                >
                  Trip guided by {memory.guide.name}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TripMemories;
