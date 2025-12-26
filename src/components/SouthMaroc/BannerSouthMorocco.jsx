import "./BannerSouthMorocco.css";
import img1 from "../../assets/south1.jpg";
import img2 from "../../assets/south2.jpg";
import img3 from "../../assets/south3.jpg";
import img4 from "../../assets/south4.jpg";

const BannerSouthMorocco = () => {
  return (
    <section className="south-banner">
      {/* LEFT CONTENT */}
      <div className="south-banner-text">
        <span className="mini-title">Explore Morocco</span>

        <h1>
          Discover the Best Destinations <br /> in South Morocco
        </h1>

        <p>
          Let’s travel beyond the ordinary and discover authentic culture,
          breathtaking landscapes, and unforgettable experiences across the
          south of Morocco.
        </p>
      </div>

      {/* RIGHT IMAGES */}
      <div className="south-banner-images">
        <div className="img img-large">
          <img src={img1} alt="South Morocco" />
          <span className="badge">100+ Destinations</span>
        </div>

        <div className="img img-small">
          <img src={img2} alt="Desert" />
        </div>

        <div className="img img-tall">
          <img src={img3} alt="Kasbah" />
        </div>

        <div className="img img-short">
          <img src={img4} alt="Oasis" />
        </div>
      </div>
    </section>
  );
};

export default BannerSouthMorocco;
