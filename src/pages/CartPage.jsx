import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items added yet</p>
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
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;