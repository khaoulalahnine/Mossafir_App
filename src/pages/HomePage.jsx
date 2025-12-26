import Carousel from "../components/HomePage/Carousel";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HomePage/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import TopRatedArtisans from "../components/HomePage/TopRatedArtisans";
import TopRatedGuides from "../components/HomePage/TopRatedGuides";
import TopRatedRestaurants from "../components/HomePage/TopRatedRestaurants";
import TripMemories from "../components/HomePage/TripMemories";
import WhyMoussafir from "../components/HomePage/WhyMoussafir";

function App() {
  return (
    <>
      <HeroSection />
      <WhyMoussafir/>
      <Carousel/>
      <TopRatedGuides/>
      <TopRatedArtisans/>
      <TopRatedRestaurants/>
      <TripMemories/>
      <NewsletterSection/>
      <Footer/>
    </>
  );
}

export default App;
