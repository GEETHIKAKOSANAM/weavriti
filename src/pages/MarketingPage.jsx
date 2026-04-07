import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const MarketingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Spring Collection Launch",
      platform: "Instagram",
      status: "Active",
      reach: "45K",
      engagement: "3.2%",
      budget: "₹15,000",
    },
    {
      id: 2,
      name: "Handloom Week Promo",
      platform: "Facebook",
      status: "Active",
      reach: "28K",
      engagement: "4.1%",
      budget: "₹10,000",
    },
    {
      id: 3,
      name: "Summer Saree Sale",
      platform: "Google Ads",
      status: "Paused",
      reach: "12K",
      engagement: "2.8%",
      budget: "₹8,000",
    },
  ]);

  const [newCampaign, setNewCampaign] = useState({
    name: "",
    platform: "Instagram",
    budget: "",
  });

  const handleCreateCampaign = (e) => {
    e.preventDefault();
    const campaign = {
      id: campaigns.length + 1,
      name: newCampaign.name,
      platform: newCampaign.platform,
      status: "Active",
      reach: "0",
      engagement: "0%",
      budget: `₹${newCampaign.budget}`,
    };
    setCampaigns([...campaigns, campaign]);
    setNewCampaign({ name: "", platform: "Instagram", budget: "" });
    alert("Campaign created successfully!");
  };

  const toggleCampaignStatus = (id) => {
    setCampaigns(
      campaigns.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Active" ? "Paused" : "Active" }
          : c
      )
    );
  };

  const totalReach = campaigns.reduce(
    (sum, c) => sum + parseInt(c.reach.replace("K", "000")),
    0
  );
  const avgEngagement = (
    campaigns.reduce((sum, c) => sum + parseFloat(c.engagement), 0) /
    campaigns.length
  ).toFixed(1);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h2>Marketing Dashboard</h2>
          <span>Promote handloom products to global audiences</span>
        </div>
        <div className="dashboard-actions">
          <button onClick={() => navigate("/home")}>🌐 View Site</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className="stat-card">
            <h4>Active Campaigns</h4>
            <p>{campaigns.filter((c) => c.status === "Active").length}</p>
          </div>
          <div className="stat-card">
            <h4>Total Reach</h4>
            <p>{(totalReach / 1000).toFixed(1)}K</p>
          </div>
          <div className="stat-card">
            <h4>Avg Engagement</h4>
            <p>{avgEngagement}%</p>
          </div>
          <div className="stat-card">
            <h4>Total Budget</h4>
            <p>
              ₹
              {campaigns
                .reduce((sum, c) => sum + parseInt(c.budget.replace(/[^0-9]/g, "")), 0)
                .toLocaleString()}
            </p>
          </div>
        </div>

        <h3>Campaign Management</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Platform</th>
              <th>Status</th>
              <th>Reach</th>
              <th>Engagement</th>
              <th>Budget</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td>{campaign.name}</td>
                <td>{campaign.platform}</td>
                <td>
                  <span
                    style={{
                      background: campaign.status === "Active" ? "#28a745" : "#6c757d",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td>{campaign.reach}</td>
                <td>{campaign.engagement}</td>
                <td>{campaign.budget}</td>
                <td>
                  <button
                    onClick={() => toggleCampaignStatus(campaign.id)}
                    style={{
                      background: campaign.status === "Active" ? "#ffc107" : "#28a745",
                      color: campaign.status === "Active" ? "#000" : "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "8px",
                    }}
                  >
                    {campaign.status === "Active" ? "Pause" : "Activate"}
                  </button>
                  <button
                    style={{
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ marginTop: "40px" }}>Create New Campaign</h3>
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            maxWidth: "500px",
          }}
        >
          <form onSubmit={handleCreateCampaign}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Campaign Name
              </label>
              <input
                type="text"
                value={newCampaign.name}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, name: e.target.value })
                }
                placeholder="Enter campaign name"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Platform
              </label>
              <select
                value={newCampaign.platform}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, platform: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              >
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Email">Email Newsletter</option>
              </select>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Budget (₹)
              </label>
              <input
                type="number"
                value={newCampaign.budget}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, budget: e.target.value })
                }
                placeholder="Enter budget amount"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: "#b08968",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "6px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Create Campaign
            </button>
          </form>
        </div>

        <h3 style={{ marginTop: "40px" }}>Global Audience Insights</h3>
        <div className="dashboard-cards">
          <div className="stat-card">
            <h4>USA</h4>
            <p>35%</p>
          </div>
          <div className="stat-card">
            <h4>India</h4>
            <p>28%</p>
          </div>
          <div className="stat-card">
            <h4>UK</h4>
            <p>15%</p>
          </div>
          <div className="stat-card">
            <h4>Others</h4>
            <p>22%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;