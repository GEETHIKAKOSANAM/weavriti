import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard";
import SpeakerButton from "../components/SpeakerButton";

import mangalagiri1 from "../assets/products/mangalagiri_kurta.jpg";
import mangalagiri2 from "../assets/products/mangalagiri_saree.jpg";
import pochampally1 from "../assets/products/Handloom-Pochampally-Saree.jpg";
import pochampally2 from "../assets/products/pochampally2.jpg";
import banarasi1 from "../assets/products/banarasi.jpg";
import chanderi from "../assets/products/chanderi.jpg";

const ProductPage = () => {
  const { fabric } = useParams();
  const { t } = useTranslation();

  const productData = {
    "mangalagiri": [
      {
        name: "mangalagiriKurtasetFabric",
        price: "1200",
        image: mangalagiri1,
      },
      {
        name: "mangalagiriHandloomSaree",
        price: "1500",
        image: mangalagiri2,
      },
    ],
    "pochampally-ikat": [
      {
        name: "pochampallyIkatSaree",
        price: "1100",
        image: pochampally1,
      },
      {
      name: "pochampallyFrock",
      price: "800",
      image: pochampally2,
      },
    ],
    "banarasi-silk": [
      {
        name: "banarasiSilkSaree",
        price: "2500",
        image: banarasi1,
      },
    ],
    "chanderi": [
      {
        name: "chanderiSilkSaree",
        price: "4500",
        image: chanderi,
      },
    ],
  };

  const products = productData[fabric] || [];

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
  <h2>
    {t(fabric)} {t("products")}
   <SpeakerButton
  textValue={`${t(fabric)} ${t("products")} ${products
    .map((item) => `${t(item.name)} ${t("from")} ₹${item.price}`)
    .join(". ")}`}
/>
  </h2>

  <div
    style={{
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    }}
  >

          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={t(item.name)}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;