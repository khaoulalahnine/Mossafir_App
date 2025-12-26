import BannerGuide from "../components/AllGuide/BannerGuide";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsletterSection from "../components/NewsletterSection";
import AllGuides from "../components/AllGuide/AllGuides";


function App() {
  return (
    <>
      <BannerGuide/>
      <AllGuides/>
    <NewsletterSection/>
      <Footer/>
    </>
  );
}

export default App;
