import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";

import mangalagiriImg from "../assets/fabrics/mangalagiri_cotton.jpeg";
import pochampallyImg from "../assets/fabrics/pochampally_ikkat.jpeg";
import kalamkariImg from "../assets/fabrics/kalamkari_sarees.jpeg";
import kanchipuramImg from "../assets/fabrics/kanchipuram_silk_saree.jpeg";
import chittinadImg from "../assets/fabrics/chittinad_cotton.jpeg";
import mysoresilkImg from "../assets/fabrics/mysore_silk.jpeg";
import ilkalImg from "../assets/fabrics/ilkal.jpg";
import kasavuImg from "../assets/fabrics/kasavu.jpg";
import gadwalImg from "../assets/fabrics/gadwal_silk_sarees.jpeg";
import banarasiImg from "../assets/fabrics/banarasi.jpg";
import bandhaniImg from "../assets/fabrics/bandhani.jpg";
import leheriyaImg from "../assets/fabrics/leheriya.jpg";
import chanderiImg from "../assets/fabrics/chanderi.jpg";
import pashminaImg from "../assets/fabrics/pashmina.jpg";




const RegionPage = () => {
  const { region } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const southData = [
    {
      state: "andhraPradesh",
      fabrics: [
        { name: "mangalagiri", image: mangalagiriImg },
        { name: "pochampallyIkat", image: pochampallyImg },
        { name: "kalamkari", image: kalamkariImg },
      ],
    },
    {
      state: "tamilNadu",
      fabrics: [
        { name: "kanchipuramSilk", image: kanchipuramImg },
        { name: "chettinadCotton", image: chittinadImg },
      ],
    },
    {
      state: "karnataka",
      fabrics: [
        { name: "mysoreSilk", image: mysoresilkImg },
        { name: "ilkalSaree", image: ilkalImg },
      ],
    },
    {
      state: "kerala",
      fabrics: [{ name: "kasavuSaree", image: kasavuImg }],
    },
    {
      state: "telangana",
      fabrics: [
        { name: "pochampallyIkat", image: pochampallyImg },
        { name: "gadwalSaree", image: gadwalImg },
      ],
    },
  ];

  const northData = [
    {
      state: "uttarPradesh",
      fabrics: [{ name: "banarasiSilk", image: banarasiImg}],
    },
    {
      state: "rajasthan",
      fabrics: [
        { name: "bandhani", image: bandhaniImg },
         { name: "leheriya", image: leheriyaImg}],
    },
    
    {
      state: "madhyaPradesh",
      fabrics: [
        { name: "chanderi", image: chanderiImg }, 
       ],
    },
    {
      state: "kashmir",
      fabrics: [{ name: "pashminaWool", image: pashminaImg }],
    },
  ];

  const data = region === "south" ? southData : northData;

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>
          {region === "south"
            ? t("southIndiaFabrics")
            : t("northIndiaFabrics")}
        </h2>

        {data.map((item, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <h3>{t(item.state)}</h3>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {item.fabrics.map((fabric, i) => {
                const slug = fabric.name.replace(/([A-Z])/g, "-$1").toLowerCase();

                return (
                  <div
                    key={i}
                    onClick={() => navigate(`/products/${slug}`)}
                    style={{
                      padding: "10px",
                      background: "#f5f5f5",
                      borderRadius: "12px",
                      width: "180px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {fabric.image && (
                      <img
                        src={fabric.image}
                        alt={t(fabric.name)}
                        style={{
                          width: "140px",
                          height: "140px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          display: "block",
                          margin: "0 auto 10px",
                        }}
                      />
                    )}
                    <p>{t(fabric.name)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RegionPage;
