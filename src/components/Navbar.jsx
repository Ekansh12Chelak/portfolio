import React, { useContext } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
    { id: "experience", icon: <FaBriefcase />, label: "Experience" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo slideIn">Ekansh</h1>
        <ul className="navbar-links">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="slideIn"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-icon-button"
                title={item.label}
              >
                {item.icon}
              </button>
            </li>
          ))}
        </ul>
        <button className="theme-toggle fadeIn" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
