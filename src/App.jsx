import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import AllGuidesPage from "./pages/AllGuides";
import AllArtisan from "./pages/AllArtisan";
import AllRestos from "./pages/AllRestos";
import SouthMorocco from "./pages/SouthMorocco";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./components/Contact/ContactPage";
import AuthPage from "./components/AuthentificationPage/AuthPage";
import CityProfile from "./pages/CityProfile";
import GuideProfile from "./pages/GuideProfile";
import RestoProfile from "./pages/RestoProfile"; // Optional: a list of restaurants
import ArtisanProfile from "./pages/ArtisanProfile";
import RestaurantProfile from "./pages/RestaurantProfile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides" element={<AllGuidesPage />} />
        <Route path="/artisans" element={<AllArtisan />} />
        <Route path="/restaurants" element={<AllRestos />} />
        <Route path="/south-morocco" element={<SouthMorocco />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/city/:cityName" element={<CityProfile />} />
        <Route path="/guide/:id" element={<GuideProfile />} />
        <Route path="/resto/:id" element={<RestoProfile />} />
        <Route path="/artisan/:id" element={<ArtisanProfile />} />
        <Route path="/restaurant/:id" element={<RestaurantProfile />} />
      </Routes>
    </>
  );
}

export default App;
