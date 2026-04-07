import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./AddressPage.css";

const AddressPage = () => {
  const [saveInfo, setSaveInfo] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Address saved successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="address-page">
        <div className="address-box">
          <h2 className="store-title">WeaVriti</h2>

          <form onSubmit={handleSubmit}>
            <h3>Contact</h3>
            <input type="email" placeholder="Email" className="full-input" />

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={() => setSaveInfo(!saveInfo)}
              />
              <span>Email me with news and offers</span>
            </label>

            <h3>Delivery</h3>

            <select className="full-input">
              <option>India</option>
            </select>

            <div className="row">
              <input type="text" placeholder="First name (optional)" />
              <input type="text" placeholder="Last name" />
            </div>

            <input type="text" placeholder="Address" className="full-input" />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="full-input"
            />

            <div className="row three-col">
              <input type="text" placeholder="City" />
              <select>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
                <option>Kerala</option>
              </select>
              <input type="text" placeholder="PIN code" />
            </div>

            <input type="text" placeholder="Phone" className="full-input" />

            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Save this information for next time</span>
            </label>

            <button type="submit" className="save-btn">
              Save Address
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressPage;