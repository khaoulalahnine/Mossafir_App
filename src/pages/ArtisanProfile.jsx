import { useState } from "react";
import ArtisanBanner from "../components/ProfileArtisan/ArtisanBanner";
import ArtisanInfo from "../components/ProfileArtisan/ArtisanInfo";
import ArtisanNavbar from "../components/ProfileArtisan/ArtisanNavbar";
import PostsSection from "../components/ProfileArtisan/PostsSection";
import WorkshopsSection from "../components/ProfileArtisan/WorkshopsSection";
import ProductsSection from "../components/ProfileArtisan/ProductsSection";

const ArtisanProfile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="w-screen min-h-screen bg-white">
      {/* FULL WIDTH BANNER */}
      <ArtisanBanner name="Fatima Artisan" verified />

      {/* FULL WIDTH CONTENT */}
      <div className="px-6 md:px-12">
        <ArtisanInfo
           bio="Traditional Moroccan artisan specializing in handmade pottery."
        city="Safi"
        language="Arabic, French"
        artisanType="Handmade Crafts"
        />

        <ArtisanNavbar active={activeTab} setActive={setActiveTab} />

        {activeTab === "posts" && <PostsSection />}
        {activeTab === "workshops" && <WorkshopsSection />}
        {activeTab === "products" && <ProductsSection />}
      </div>
    </div>
  );
};

export default ArtisanProfile;
