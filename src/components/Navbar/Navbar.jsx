import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // Re-check login when menu opens
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, [showMenu]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/home");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">WeaVriti</h2>

      <div className="nav-links">
        <a href="#featured">CATEGORIES</a>
        <a href="#artisans">ARTISANS</a>
        <a href="#reviews">REVIEWS</a>
      </div>

      <div className="profile-container">
        <div
          className="profile-icon"
          onClick={() => setShowMenu(!showMenu)}
        >
          👤
        </div>

        {showMenu && (
          <div className="profile-dropdown">
            {!isLoggedIn ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            ) : (
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;