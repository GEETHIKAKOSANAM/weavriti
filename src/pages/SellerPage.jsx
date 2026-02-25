import "./Dashboard.css";
import saree from "../assets/images/banarasi.jpeg";

function SellerPage() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Artisan Dashboard</h2>
        <span>Welcome Seller</span>
      </div>

      <div className="dashboard-content">
        <h3>My Products</h3>

        <div className="product-grid-dashboard">
          <div className="product-card-dashboard">
            <img src={saree} alt="product" />
            <p>Handwoven Saree</p>
            <small>₹2500</small>
          </div>

          <div className="product-card-dashboard">
            <img src={saree} alt="product" />
            <p>Designer Ikat</p>
            <small>₹3200</small>
          </div>
        </div>

        <h3>Recent Orders</h3>

        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Buyer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banarasi Silk Saree</td>
              <td>Rahul</td>
              <td>Shipped</td>
            </tr>
            <tr>
              <td>Ikat Kurti</td>
              <td>Priya</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SellerPage;