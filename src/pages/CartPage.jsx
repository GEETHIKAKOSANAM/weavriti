import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBuyNow = (item) => {
    navigate("/checkout", { state: { product: item } });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>{t("yourCart")}</h2>

        {cartItems.length === 0 ? (
          <p>{t("emptyCart")}</p>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "220px",
                  padding: "10px",
                  borderRadius: "12px",
                  background: "#f5f5f5",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={t(item.name)}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <h4>{t(item.name)}</h4>
                <p>₹{item.price}</p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <button
                    onClick={() => handleBuyNow(item)}
                    style={{
                      background: "#8b3a3a",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {t("buyNow")}
                  </button>

                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      background: "#8b3a3a",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {t("remove")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;