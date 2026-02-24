import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">WeaVriti</h2>

      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#featured">CATEGORIES</a>
        <a href="#artisans">ARTISANS</a>
        <a href="#reviews">REVIEWS</a>
      </div>

      <div className="profile-icon">👤</div>
    </nav>
  );
}

export default Navbar;