import { FaVolumeUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import "./Home.css";

import handloomBags from "../assets/images/handloom_bags.jpg";
import handloomSarees from "../assets/images/handloom_sarees.jpg";
import homeDecor from "../assets/images/home_decor.jpg";
import jewellery from "../assets/images/jewellery.jpg";



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
  { name: "goldenThreads", price: "₹3099", image: goldenthreads },
  { name: "mangalagiriKurtiSet", price: "₹1899", image: mangalagirikurti },
  { name: "snowBag", price: "₹456", image: snowbag },
  { name: "pillowCover", price: "₹290", image: pillowcover },
];

const Home = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const { addToCart } = useCart();
  
  const { t, i18n } = useTranslation();
  const speakText = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = i18n.language;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
};

  return (
    <>
      {/* REGION BASED SECTION */}
      <section className="featured" id="featured">
        <h2>
  {t("shopByCategory")}
  <FaVolumeUp
    style={{ marginLeft: "10px", cursor: "pointer" }}
    onClick={() => speakText(t("shopByCategory"))}
  />
</h2>

        {/* FILTER BUTTON */}
        <div className="top-filter">
          <button onClick={() => setShowFilter(!showFilter)}>
  {t("filter")} ▾
  <FaVolumeUp
    style={{ marginLeft: "8px", cursor: "pointer", fontSize: "14px" }}
    onClick={(e) => {
      e.stopPropagation();
      speakText(t("filter"));
    }}
  />
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
  <FaVolumeUp
    style={{ marginLeft: "8px", cursor: "pointer", fontSize: "13px" }}
    onClick={(e) => {
      e.stopPropagation();
      speakText(t("south"));
    }}
  />
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
  <FaVolumeUp
    style={{ marginLeft: "8px", cursor: "pointer", fontSize: "13px" }}
    onClick={(e) => {
      e.stopPropagation();
      speakText(t("north"));
    }}
  />
</label>
            </div>
          )}
        </div>

        {/* CATEGORY GRID */}
        
<div className="category-grid">
  {[
    { name: "sarees", image: handloomSarees, path: "/category/sarees" },
    { name: "handloomBags", image: handloomBags, path: "/category/handloom_bags" },
    { name: "homeDecor", image: homeDecor, path: "/category/home_decor" },
    { name: "accessories", image: jewellery, path: "/category/accessories" },
  ].map((item) => (
    <div
      key={item.name}
      className="category-card"
      onClick={() => navigate(item.path)}   // ✅ FIXED
      style={{ cursor: "pointer" }}
    >
      <img src={item.image} alt={t(item.name)} />
      <p>
  {t(item.name)}
  <FaVolumeUp
    style={{ marginLeft: "8px", cursor: "pointer", fontSize: "14px" }}
    onClick={(e) => {
      e.stopPropagation();
      speakText(t(item.name));
    }}
  />
</p>
    </div>
  ))}
</div>
        
      </section>

      {/* SUPPORT */}
      <section className="support-section">
        <div className="support-left">
          <h3>
  {t("supportTitle")}
  <span
    style={{ marginLeft: "10px", cursor: "pointer" }}
    onClick={() =>
      speakText(
        t("supportTitle") + ". " +
        t("supportDesc1") + ". " +
        t("supportDesc2") + ". " +
        t("supportDesc3")
      )
    }
  >
    🔊
  </span>
</h3>
         
          <p>{t("supportDesc1")}</p>
    <p>{t("supportDesc2")}</p>
    <p>{t("supportDesc3")}</p>
        </div>
        <div className="support-right">
          <img src={india} alt="India Map" className="map-circle" />
        </div>
      </section>

      {/* JUST LAUNCHED */}
      <section id="launch" className="section">
  <h2 className="section-title">
  {t("launch")}
  <FaVolumeUp
    style={{ marginLeft: "10px", cursor: "pointer" }}
    onClick={() => speakText(t("launch"))}
  />
</h2>

  <div className="product-grid">
    {products.map((item, index) => (
      <div key={index} className="product-card">
        <img
          src={item.image}
          alt={t(item.name)}
          className="product-img"
        />
        <h4>
  {t(item.name)}
  <FaVolumeUp
    style={{ marginLeft: "8px", cursor: "pointer", fontSize: "14px" }}
    onClick={(e) => {
      e.stopPropagation();
      speakText(t(item.name));
    }}
  />
</h4>
        <p className="price">
  {t("from")} {item.price}
  <FaVolumeUp
    style={{ marginLeft: "8px", cursor: "pointer", fontSize: "13px" }}
    onClick={(e) => {
      e.stopPropagation();
      speakText(`${t(item.name)}. ${t("from")} ${item.price}`);
    }}
  />
</p>
        <button
          onClick={() => {
            addToCart({
              name: item.name,
              price: item.price,
              image: item.image,
            });
            navigate("/cart");
          }}
        >
          {t("cart")}
        </button>
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
  <p>⭐⭐⭐⭐⭐</p>
  <p>"{t("review1Text")}"</p>
  <span>- Keerthi</span>
</div>

          <div className="review-card">
            <p>⭐⭐⭐⭐☆</p>
  <p>"{t("review2Text")}</p>
  <span>- Priya</span>
</div>
</div>
<div className="review-btn-container">
    <button className="review-btn">{t("writeReview")}</button>
  </div>
</section>


        
      
    </>
  );
};

export default Home;