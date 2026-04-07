import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Dashboard.css";

import banarasi from "../assets/images/banarasi.jpeg";
import cotton from "../assets/images/cotton.jpeg";
import ikat from "../assets/images/ikat.jpeg";
import kalamkari from "../assets/images/kalamkari.jpeg";
import goldenthreads from "../assets/images/goldenthreads.webp";
import mangalagirikurti from "../assets/images/mangalagirikurti.jpg";
import snowbag from "../assets/images/snowbag.jpg";
import pillowcover from "../assets/images/pillowcover.webp";

const products = [
  { id: 1, name: "Golden Threads", price: 3099, image: goldenthreads, category: "south" },
  { id: 2, name: "Mangalagiri Kurti Set", price: 1899, image: mangalagirikurti, category: "south" },
  { id: 3, name: "Snow Bag", price: 456, image: snowbag, category: "accessories" },
  { id: 4, name: "Pillow Cover", price: 290, image: pillowcover, category: "home" },
  { id: 5, name: "Banarasi Silk Saree", price: 8500, image: banarasi, category: "north" },
  { id: 6, name: " Pochampally Ikat", price: 4200, image: ikat, category: "south" },
  { id: 7, name: "Kalamkari Dress", price: 2800, image: kalamkari, category: "south" },
  { id: 8, name: "Cotton Saree", price: 1200, image: cotton, category: "south" },
];

const BuyerPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const categories = [
    { name: "mangalagiri", image: cotton, region: "mangalagiri" },
    { name: "banarasiSilk", image: banarasi, region: "banarasi" },
    { name: "pochampallyIkat", image: ikat, region: "pochampally" },
    { name: "kalamkari", image: kalamkari, region: "kalamkari" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h2>Welcome, {user?.name || "Buyer"}!</h2>
          <span>Browse handloom products from artisans worldwide</span>
        </div>
        <div className="dashboard-actions">
          <button onClick={() => navigate("/cart")}>🛒 My Cart</button>
          <button onClick={() => navigate("/orders")}>📦 My Orders</button>
        </div>
      </div>

      <div className="dashboard-content">
        <h3>Shop by Region</h3>
        <div className="category-grid" style={{ marginBottom: "40px" }}>
          {categories.map((item) => (
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

        <h3>Featured Products</h3>
        <div className="product-grid-dashboard">
          {products.map((product) => (
            <div key={product.id} className="product-card-dashboard">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">₹{product.price}</p>
              <button
                className="add-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                {t("addToCart")}
              </button>
            </div>
          ))}
        </div>

        <h3>Recent Orders</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD001</td>
              <td>Banarasi Silk Saree</td>
              <td>2026-04-01</td>
              <td><span className="status shipped">Shipped</span></td>
              <td>₹8500</td>
            </tr>
            <tr>
              <td>#ORD002</td>
              <td>Mangalagiri Kurti Set</td>
              <td>2026-04-05</td>
              <td><span className="status pending">Processing</span></td>
              <td>₹1899</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "40px" }}>
          <h3>Leave Feedback</h3>
          <div className="feedback-section">
            <textarea
              placeholder="Share your experience with handloom products..."
              rows="4"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginBottom: "10px",
              }}
            />
            <button className="submit-feedback">Submit Feedback</button>
          </div>
        </div>
      </div>

      <style>{`
        .add-cart-btn {
          background: #b08968;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 8px;
          width: 100%;
        }
        .add-cart-btn:hover {
          background: #8b5e3c;
        }
        .status {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
        }
        .status.shipped {
          background: #d4edda;
          color: #155724;
        }
        .status.pending {
          background: #fff3cd;
          color: #856404;
        }
        .submit-feedback {
          background: #b08968;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
        }
        .feedback-section textarea {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
};

export default BuyerPage;