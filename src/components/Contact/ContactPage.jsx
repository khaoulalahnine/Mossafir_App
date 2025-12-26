import "./ContactPage.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="contact-page">
      {/* HERO / INFO */}
      <div className="contact-hero">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to start your Moroccan adventure? Reach out to us and we’ll help you plan the perfect trip!
        </p>
        <div className="contact-info">
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h4>Address</h4>
            <p>Marrakech, Morocco</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h4>Email</h4>
            <p>contact@moussafir.com</p>
          </div>
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h4>Phone</h4>
            <p>+212 6 12 34 56 78</p>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="6" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
