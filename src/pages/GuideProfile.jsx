import { useState } from "react";
import GuideBanner from "../components/ProfileGuide/GuideBanner";
import GuideInfo from "../components/ProfileGuide/GuideInfo";
import GuideNavbar from "../components/ProfileGuide/GuideNavbar";
import PostsSection from "../components/ProfileGuide/PostsSection";
import TripsSection from "../components/ProfileGuide/TripsSection";

const GuideProfile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="w-screen min-h-screen bg-white">
      {/* FULL WIDTH BANNER */}
      <GuideBanner name="John Doe" verified={true} />

      {/* FULL WIDTH CONTENT */}
      <div className="px-6 md:px-12">
        <GuideInfo
          bio="Experienced city guide showing travelers the hidden gems of Agadir."
          language="English"
          city="Agadir"
          type="Cultural Guide"
        />

        <GuideNavbar active={activeTab} setActive={setActiveTab} />

        {activeTab === "posts" && <PostsSection />}
        {activeTab === "trips" && <TripsSection />}
      </div>
    </div>
  );
};

export default GuideProfile;
