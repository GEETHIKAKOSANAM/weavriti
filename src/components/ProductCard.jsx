import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SpeakerButton from "./SpeakerButton";
import "./ProductCard.css";

const ProductCard = ({ image, name, price }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCart = () => {
  const product = { image, name, price };
  addToCart(product);
  const message = t("addedToCart");
  alert(t("added to cart"));
  const utterance = new SpeechSynthesisUtterance(message);

  const currentLang = i18n.language;

  if (currentLang === "te") utterance.lang = "te-IN";
  else if (currentLang === "hi") utterance.lang = "hi-IN";
  else utterance.lang = "en-US";

  window.speechSynthesis.speak(utterance);
  navigate("/cart");
};

  const handleBuyNow = () => {
  const product = { image, name, price };
  navigate("/checkout", { state: { product } });
};

  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h3>
        {t(name)}
        <SpeakerButton textValue={t(name)} />
      </h3>

      <p className="price">
        {t("from")} ₹{price}
      </p>

      <div className="button-group">
        <button className="cart-btn" onClick={handleCart}>
          {t("addToCart")}
        </button>

        <button className="buy-btn" onClick={handleBuyNow}>
          {t("buyNow")}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;