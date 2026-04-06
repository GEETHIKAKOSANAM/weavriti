import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

import banarasi from "../assets/images/banarasi.jpeg";
import cotton from "../assets/images/cotton.jpeg";
import ikat from "../assets/images/ikat.jpeg";
import kalamkari from "../assets/images/kalamkari.jpeg";

import goldenthreads from "../assets/images/goldenthreads.webp";
import mangalagirikurti from "../assets/images/mangalagirikurti.jpg";
import snowbag from "../assets/images/snowbag.jpg";
import pillowcover from "../assets/images/pillowcover.webp";

import artist1 from "../assets/images/artist1.jpg";
import artist2 from "../assets/images/artist2.jpg";
import artist3 from "../assets/images/artist3.jpg";

import india from "../assets/images/india.jpg";

/* PRODUCTS DATA */
const products = [
  { name: "Golden Threads", price: "₹3099", image: goldenthreads },
  { name: "Mangalagiri kurti set", price: "₹1899", image: mangalagirikurti },
  { name: "Snow bag", price: "₹456", image: snowbag },
  { name: "Pillow cover", price: "₹290", image: pillowcover },
];

const Home = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {/* REGION BASED SECTION */}
      <section className="featured" id="featured">
        <h2>{t("shop")}</h2>

        {/* FILTER BUTTON */}
        <div className="top-filter">
          <button onClick={() => setShowFilter(!showFilter)}>
            {t("filter")} ▾
          </button>

          {showFilter && (
            <div className="filter-dropdown">
              <label className="filter-option">
                <input
                  type="radio"
                  name="region"
                  onChange={() => {
                    navigate("/region/south");
                    setShowFilter(false);
                  }}
                />
                {t("south")}
              </label>

              <label className="filter-option">
                <input
                  type="radio"
                  name="region"
                  onChange={() => {
                    navigate("/region/north");
                    setShowFilter(false);
                  }}
                />
                {t("north")}
              </label>
            </div>
          )}
        </div>

        {/* CATEGORY GRID */}
        <div className="category-grid">
          {[
            { name: "mangalagiri", image: cotton, region: "mangalagiri" },
            { name: "banarasiSilk", image: banarasi, region: "banarasi" },
            { name: "pochampallyIkat", image: ikat, region: "pochampally" },
            { name: "kalamkari", image: kalamkari, region: "kalamkari" },
          ].map((item) => (
            <div
              key={item.name}
              className="category-card"
              onClick={() => navigate(`/region/${item.region}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={t(item.name)} />
              <p>{t(item.name)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT */}
      <section className="support-section">
        <div className="support-left">
          <h3>{t("support")}</h3>
        </div>
        <div className="support-right">
          <img src={india} alt="India Map" className="map-circle" />
        </div>
      </section>

      {/* JUST LAUNCHED */}
      <section id="launch" className="section">
        <h2 className="section-title">{t("launch")}</h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} className="product-img" />
              <h4>{item.name}</h4>
              <p className="price">
                {t("from")} {item.price}
              </p>
              <button>{t("cart")}</button>
            </div>
          ))}
        </div>
      </section>

      {/* ARTISANS */}
      <section id="artisans" className="section">
        <h2 className="section-title">{t("artisans")}</h2>

        <div className="artisan-grid">
          <div className="artisan-card">
            <img src={artist1} alt="Artisan 1" />
          </div>
          <div className="artisan-card">
            <img src={artist2} alt="Artisan 2" />
          </div>
          <div className="artisan-card">
            <img src={artist3} alt="Artisan 3" />
          </div>
        </div>

        <button className="more-btn">{t("more")}</button>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section">
        <h2 className="section-title">{t("reviews")}</h2>

        <div className="review-grid">
          <div className="review-card">
            <p>{t("review1")}</p>
            <span>{t("review1by")}</span>
          </div>

          <div className="review-card">
            <p>{t("review2")}</p>
            <span>{t("review2by")}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;