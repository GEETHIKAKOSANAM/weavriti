import "./Dashboard.css";

function AdminPage() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <span>Admin Panel</span>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>120</p>
          </div>

          <div className="stat-card">
            <h4>Total Sellers</h4>
            <p>32</p>
          </div>

          <div className="stat-card">
            <h4>Total Revenue</h4>
            <p>₹1,25,000</p>
          </div>
        </div>

        <h3>User Management</h3>

        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rahul</td>
              <td>rahul@gmail.com</td>
              <td>Buyer</td>
            </tr>
            <tr>
              <td>Sahasra</td>
              <td>sahasra@gmail.com</td>
              <td>Seller</td>
            </tr>
            <tr>
              <td>Keerthana</td>
              <td>keerthana@gmail.com</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;