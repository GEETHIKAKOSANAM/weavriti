
import banarasi from "../assets/images/banarasi.jpeg";
import cotton from "../assets/images/cotton.jpeg";
import ikat from "../assets/images/ikat.jpeg";
import kalamkari from "../assets/images/kalamkari.jpeg";
import kurtis from "../assets/images/kurtis.jpeg";
import accessories from "../assets/images/accessories.jpeg";
import homeImg from "../assets/images/home.jpeg";
import mens from "../assets/images/mens.jpeg";

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
  return (
    <>
      {/* FEATURED */}
      <section className="featured" id="featured">
        <h2>FEATURED PRODUCTS</h2>

        <div className="category-grid">
          {[
            { name: "Banarasi silk saree", image: banarasi },
            { name: "Pure cotton", image: cotton },
            { name: "Ikat designer saree", image: ikat },
            { name: "Kalamkari", image: kalamkari },
            { name: "Kurtis", image: kurtis },
            { name: "Accessories", image: accessories },
            { name: "Home", image: homeImg },
            { name: "Mens wear", image: mens },
          ].map((item) => (
            <div className="category-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT */}
      <section className="support-section">
        <div className="support-left">
          <h3>Supporting 900+ artisans across India</h3>
        </div>
        <div className="support-right">
          <img src={india} alt="India Map" className="map-circle" />
        </div>
      </section>

      {/* JUST LAUNCHED */}
      <section id="launch" className="section">
        <h2 className="section-title">JUST LAUNCHED</h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <img
                src={item.image}
                alt={item.name}
                className="product-img"
              />
              <h4>{item.name}</h4>
              <p className="price">From {item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* ARTISANS */}
      <section id="artisans" className="section">
        <h2 className="section-title">MEET THE ARTISANS</h2>

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

        <button className="more-btn">More</button>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section">
        <h2 className="section-title">WHAT OUR CUSTOMERS SAY</h2>

        <div className="review-grid">
          <div className="review-card">
            <p>Love the quality and fit. Highly recommended</p>
            <span>Priya · Hyderabad · 2 weeks ago</span>
          </div>

          <div className="review-card">
            <p>Great collection but a bit not satisfied.</p>
            <span>Sneha · Vijayawada · 4 weeks ago</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;