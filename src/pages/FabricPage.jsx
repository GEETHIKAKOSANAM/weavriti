import { useParams } from "react-router-dom";
import mangalagiriImg from "../assets/fabrics/mangalagiri_cotton.jpeg";
import pochampallyImg from "../assets/fabrics/pochampally_ikkat.jpeg";
import kalamkariImg from "../assets/fabrics/kalamkari_sarees.jpeg";
import kanchipuramImg from "../assets/fabrics/kanchipuram_silk_saree.jpeg";
import chittinadImg from "../assets/fabrics/chittinad_cotton.jpeg";
import mysoresilkImg from "../assets/fabrics/mysore_silk.jpeg";
import ilkalImg from "../assets/fabrics/ilkal.jpg";
import kasavuImg from "../assets/fabrics/kasavu.jpg";
import gadwalImg from "../assets/fabrics/gadwal_silk_sarees.jpeg";


const FabricPage = () => {
  const { fabricName } = useParams();

  const fabricDetails = {
    "mangalagiri": {
      description: "Mangalagiri is a traditional cotton fabric from Andhra Pradesh.",
      origin: "Andhra Pradesh",
      image: mangalagiriImg,
    },
    "pochampally-ikat": {
      description: "Pochampally Ikat is a famous handwoven fabric.",
      origin: "Telangana",
      image: pochampallyImg,
    },
    "kalamkari": {
      description: "Kalamkari is a traditional printed textile art.",
      origin: "Andhra Pradesh",
      image: kalamkariImg,
    },
    "kanchipuram-silk": {
      description: "Kanchipuram Silk is known for rich silk and zari work.",
      origin: "Tamil Nadu",
      image: kanchipuramImg,
    },
    "chettinad-cotton": {
      description: "Chettinad Cotton is known for colorful patterns and soft texture.",
      origin: "Tamil Nadu",
      image: chittinadImg,
    },
    "mysore-silk": {
      description: "Mysore Silk saree is a premium silk fabric from Karnataka known for its smooth texture and rich elegance.",
      origin: "Karnataka",
      image: mysoresilkImg,
    },
    "ilkal": {
      description: "Ilkal saree is a traditional handloom saree from Karnataka known for its unique weaving technique and distinctive red pallu.",
      origin: "Karnataka",
      image: ilkalImg,
    },
    "kasavu": {
      description: "Kasavu saree is a traditional Kerala saree known for its elegant off-white fabric with a golden border.",
      origin: "Kerela",
      image: kasavuImg
    },
    "gadwal": {
      description: "Gadwal silk saree is a traditional handwoven saree from Telangana known for its lightweight fabric and rich zari borders.",
      origin: "Telagana",
      image: gadwalImg
    },
  };

  const fabric = fabricDetails[fabricName];

  if (!fabric) {
    return <div style={{ padding: "20px" }}>Fabric not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{fabricName.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</h2>
      <img
        src={fabric.image}
        alt={fabricName}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <p><strong>Origin:</strong> {fabric.origin}</p>
      <p>{fabric.description}</p>
    </div>
  );
};

export default FabricPage;