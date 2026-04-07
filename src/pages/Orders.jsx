import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const Orders = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, isBuyer, isSeller } = useAuth();

  const orders = [
    {
      id: "ORD-001",
      product: "Banarasi Silk Saree",
      artisan: "Varanasi Weavers Co.",
      price: 8500,
      date: "2026-03-28",
      status: "Delivered",
      tracking: "TRK-882734",
    },
    {
      id: "ORD-002",
      product: "Mangalagiri Handloom Saree",
      artisan: "Mangalagiri Handloom Society",
      price: 3200,
      date: "2026-04-01",
      status: "Shipped",
      tracking: "TRK-882735",
    },
    {
      id: "ORD-003",
      product: "Pochampally Ikat Dupatta",
      artisan: "Pochampally Skill Center",
      price: 1800,
      date: "2026-04-05",
      status: "Processing",
      tracking: null,
    },
    {
      id: "ORD-004",
      product: "Kalamkari Table Runner",
      artisan: "Kalamkari Artisans Guild",
      price: 950,
      date: "2026-04-06",
      status: "Confirmed",
      tracking: null,
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true;
    return order.status.toLowerCase() === filter;
  });

  const getStatusColor = (status) => {
    const statusMap = {
      Confirmed: "#17a2b8",
      Processing: "#ffc107",
      Shipped: "#6610f2",
      Delivered: "#28a745",
    };
    return statusMap[status] || "#6c757d";
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h2>{isBuyer ? "My Orders" : "Order Management"}</h2>
          <span>
            {isBuyer
              ? "Track your handloom purchases"
              : "Manage incoming orders from buyers"}
          </span>
        </div>
        <div className="dashboard-actions">
          <button onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className="stat-card">
            <h4>Total Orders</h4>
            <p>{orders.length}</p>
          </div>
          <div className="stat-card">
            <h4>Delivered</h4>
            <p>{orders.filter((o) => o.status === "Delivered").length}</p>
          </div>
          <div className="stat-card">
            <h4>In Transit</h4>
            <p>{orders.filter((o) => o.status === "Shipped").length}</p>
          </div>
          <div className="stat-card">
            <h4>Total Spent</h4>
            <p>
              ₹{orders.reduce((sum, o) => sum + o.price, 0).toLocaleString()}
            </p>
          </div>
        </div>

        <h3>Order History</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "10px" }}>Filter by Status:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: "8px", borderRadius: "6px" }}
          >
            <option value="all">All Orders</option>
            <option value="confirmed">Confirmed</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>

        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              {isSeller && <th>Buyer</th>}
              <th>Artisan</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Tracking</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                {isSeller && <td>John Doe</td>}
                <td>{order.artisan}</td>
                <td>{order.date}</td>
                <td>₹{order.price.toLocaleString()}</td>
                <td>
                  <span
                    style={{
                      background: getStatusColor(order.status),
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  {order.tracking ? (
                    <span style={{ color: "#6610f2", cursor: "pointer" }}>
                      {order.tracking}
                    </span>
                  ) : (
                    <span style={{ color: "#999" }}>Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isBuyer && (
          <div style={{ marginTop: "40px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
            <h3>Need Help?</h3>
            <p style={{ color: "#666", marginBottom: "15px" }}>
              Having issues with your order? Contact the artisan directly or reach out to support.
            </p>
            <button style={{ background: "#b08968", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px", cursor: "pointer" }}>
              Contact Support
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;