import { useState } from "react";
import "./AuthPage.css";

const roles = ["Traveler", "Artisan", "Restaurant", "Guide"];
const cities = ["Marrakech", "Fes", "Rabat", "Essaouira", "Agadir"];
const crafts = ["Pottery", "Textile", "Leatherwork", "Jewelry"];
const cuisines = ["Moroccan", "French", "Italian", "Seafood"];
const languages = ["Arabic", "French", "English", "Spanish"];
const activities = ["Tour Guide", "Adventure Guide", "Cultural Guide"];

const AuthPage = () => {
  const [role, setRole] = useState("Traveler");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      {/* Left Form */}
      <div className="auth-left">
        <h3>{isLogin ? "Login" : "Register"}</h3>

        <form className="auth-form">
          {/* If register, choose role */}
          {!isLogin && (
            <div className="role-selector">
              {roles.map((r) => (
                <button
                  key={r}
                  type="button"
                  className={role === r ? "active-role" : ""}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          {/* Common Fields */}
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          {/* Role-specific Fields for Register */}
          {!isLogin && role === "Artisan" && (
            <>
              <select required>
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <select required>
                <option value="">Select Craft Type</option>
                {crafts.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </>
          )}

          {!isLogin && role === "Restaurant" && (
            <>
              <select required>
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <select required>
                <option value="">Select Cuisine Type</option>
                {cuisines.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </>
          )}

          {!isLogin && role === "Guide" && (
            <>
              <select required>
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <select required>
                <option value="">Select Languages</option>
                {languages.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              <select required>
                <option value="">Select Activity Type</option>
                {activities.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </>
          )}

          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>

        <p className="toggle-form">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>

      {/* Right Side Welcome Image */}
      <div className="auth-right">
        <div className="auth-right-overlay">
          <h2>Welcome to Moussafir</h2>
          <p>
            Explore Morocco your way! Travel, guide, share, and experience the
            best of Moroccan culture and destinations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
