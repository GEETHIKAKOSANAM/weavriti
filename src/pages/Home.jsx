const categories = [
  "Banarasi silk saree",
  "Pure cotton",
  "Ikat designer saree",
  "Kalamkari",
  "Kurtis",
  "Accessories",
  "Home",
  "Mens wear",
];

const products = [
  { name: "Golden Threads", price: "Rs.3999" },
  { name: "Mangalagiri kurti set", price: "Rs.1899" },
  { name: "Snow bag", price: "Rs.450" },
  { name: "Pillow cover", price: "Rs.299" },
];

const Home = () => {
  return (
    <>
      {/* FEATURED */}
      <section id="featured" className="section">
        <h2 className="section-title">FEATURED PRODUCTS</h2>
        <div className="circle-grid">
          {categories.map((item, index) => (
            <div key={index} className="circle-card">
              <div className="circle-img"></div>
              <p>{item}</p>
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
          <div className="map-circle"></div>
        </div>
      </section>

      {/* JUST LAUNCHED */}
      <section id="launch" className="section">
        <h2 className="section-title">JUST LAUNCHED</h2>
        <div className="product-grid">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-img"></div>
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
          <div className="artisan-card"></div>
          <div className="artisan-card"></div>
          <div className="artisan-card"></div>
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