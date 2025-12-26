// import React, { useState } from "react";
// import { Search, ChevronDown, Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";
// import "../App.css";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const links = [
//     {
//       name: "Discover",
//       dropdown: ["All Guides", "All Restaurants","All Artisan"],
//     },
//     {
//       name: "Places",
//       dropdown: [
//         "South Morocco",
//         "East Morocco",
//         "Atlas Mountain",
//         "Sahara",
//         "Beach",
//       ],
//     },
//     { name: "About us" },
//     { name: "Contact" },
//   ];

//   return (
//     <nav className="advanced-nav">
//       {/* LEFT */}
//       <div className="nav-left">
//         <img src={logo} alt="Moussafir logo" className="brand-logo" />
//         <span className="brand-name">MOUSSAFIR</span>
//       </div>

//       {/* CENTER */}
//       <ul className={`nav-center ${mobileOpen ? "mobile-open" : ""}`}>
//         {links.map((link, i) => (
//           <li key={i} className="nav-item">
//             <div className="nav-link">
//               {link.name}
//               {link.dropdown && <ChevronDown size={14} />}
//               <span className="underline" />
//             </div>

//             {link.dropdown && (
//               <ul className="dropdown">
//                 {link.dropdown.map((item, j) => (
//                   <li key={j} className="dropdown-item">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* RIGHT */}
//       <div className="nav-right">
//         <div className="search-box">
//           <Search size={16} />
//           <input type="text" placeholder="Search" />
//         </div>
//         <button className="login-btn">Login</button>
//       </div>

//       {/* MOBILE */}
//       <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
//         {mobileOpen ? <X /> : <Menu />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "../App.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    {
      name: "Discover",
      dropdown: [
        { name: "All Guides", path: "/guides" },
        { name: "All Restaurants", path: "/restaurants" },
        { name: "All Artisan", path: "/artisans" },
      ],
    },
    {
      name: "Places",
      dropdown: [
        { name: "South Morocco", path: "/south-morocco" },
        { name: "East Morocco", path: "/east-morocco" },
        { name: "Atlas Mountain", path: "/atlas-mountain" },
        { name: "Sahara", path: "/sahara" },
        { name: "Beach", path: "/beach" },
      ],
    },
    { name: "About us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="advanced-nav">
      {/* LEFT */}
    <div className="nav-left">
  <Link to="/">
    <img src={logo} alt="Moussafir logo" className="brand-logo" />
  </Link>
  <span className="brand-name">MOUSSAFIR</span>
</div>

      {/* CENTER */}
      <ul className={`nav-center ${mobileOpen ? "mobile-open" : ""}`}>
        {links.map((link, i) => (
          <li key={i} className="nav-item">
            {link.dropdown ? (
              <div className="nav-link">
                {link.name}
                <ChevronDown size={14} />
                <span className="underline" />
              </div>
            ) : (
              <Link to={link.path} className="nav-link">
                {link.name}
                <span className="underline" />
              </Link>
            )}

            {link.dropdown && (
              <ul className="dropdown">
                {link.dropdown.map((item, j) => (
                  <li key={j} className="dropdown-item">
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </div>
        <Link to="/auth">
          <button className="login-btn">Login</button>
        </Link>
      </div>

      {/* MOBILE */}
      <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X /> : <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;
