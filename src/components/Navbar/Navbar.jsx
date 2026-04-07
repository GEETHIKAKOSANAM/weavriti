import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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
    navigate("/");
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
  };

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
  WeaVriti
</h2>

      {/*  NAV LINKS FIXED */}
      <div className="nav-links">
        <Link to="/">{t("Home")}</Link>
        <Link to="/categories">{t("categories")}</Link>
        <Link to="/artisans">{t("artisans")}</Link>
        <Link to="/reviews">{t("reviews")}</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {/* 🌐 LANGUAGE */}
        <select onChange={handleLanguageChange} value={i18n.language}>
          <option value="en">English</option>
          <option value="te">Telugu</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannada</option>
          <option value="ml">Malayalam</option>
        </select>

        {/* 🛒 CART */}
        <FaShoppingCart
          className="cart-icon"
          onClick={() => navigate("/cart")}
        />

        {/* 👤 PROFILE */}
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

      </div>
    </nav>
  );
}

export default Navbar;