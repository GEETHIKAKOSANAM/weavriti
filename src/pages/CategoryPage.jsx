import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard";

import bag1 from "../assets/images/handloom_bags.jpg";
import bag2 from "../assets/images/snowbag.jpg";
import saree1 from "../assets/images/handloom_sarees.jpg";
import decor1 from "../assets/images/home_decor.jpg";
import decor2 from "../assets/images/pillowcover.webp";
import accessory1 from "../assets/images/jewellery.jpg";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { t } = useTranslation();

  const categoryProducts = {
    handloom_bags: [
      {
        name: "handloomBagClassic",
        price: "899",
        image: bag1,
      },
      {
        name: "snowBag",
        price: "1199",
        image: bag2,
      },
    ],
    sarees: [
      {
        name: "handloomSareeClassic",
        price: "2499",
        image: saree1,
      },
    ],
    home_decor: [
      {
        name: "homeDecorWallHanging",
        price: "699",
        image: decor1,
      },
      {
        name: "pillowCover",
        price: "250",
        image: decor2,
      },
    ],
    accessories: [
      {
        name: "jewellerySet",
        price: "499",
        image: accessory1,
      },
    ],
  };

  const products = categoryProducts[categoryName] || [];

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>{t(categoryName)} {t("products")}</h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;