import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar/Navbar";
import SpeakerButton from "../components/SpeakerButton";

const CheckoutPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <h2>{t("checkout")}
             <SpeakerButton textValue={t("checkout")} />
          </h2>
          <p>{t("noProductSelected")}</p>
          <button onClick={() => navigate("/home")}>{t("goHome")}</button>
        </div>
      </>
    );
  }

  const handlePlaceOrder = () => {
    alert(t("orderPlaced"));
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>{t("checkout")}</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "700px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={product.image}
            alt={t(product.name)}
            style={{
              width: "200px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <div>
            <h3>{t(product.name)}
                <SpeakerButton textValue={t(product.name)} />
            </h3>
            <p>
              <strong>{t("price")}:</strong> ₹{product.price}
              <SpeakerButton textValue={`${t("price")} ₹${product.price}`} />
            </p>
            <p>
              <strong>{t("delivery")}:</strong> {t("freeDelivery")}
              <SpeakerButton textValue={`${t("delivery")} ${t("freeDelivery")}`} />
            </p>

            <button
              onClick={handlePlaceOrder}
              style={{
                marginTop: "15px",
                background: "#8b3a3a",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              {t("placeOrder")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;