import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/Splash/Splash";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BuyerPage from "./pages/BuyerPage";
import SellerPage from "./pages/SellerPage";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Language from "./pages/Language";
import RegionPage from "./pages/RegionPage";
import FabricPage from "./pages/FabricPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddressPage from "./pages/AddressPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/language" element={<Language />} />
      <Route path="/region/:region" element={<RegionPage />} />
      <Route path="/fabric/:fabricName" element={<FabricPage />} />
      <Route path="/products/:fabric" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />

      {/* Home with Navbar + Footer */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/buyer"
        element={
          <ProtectedRoute allowedRole="buyer">
            <BuyerPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/seller"
        element={
          <ProtectedRoute allowedRole="seller">
            <SellerPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;