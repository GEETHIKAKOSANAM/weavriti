import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    let user;

    if (email === "sahasra@gmail.com") {
      user = { email, role: "seller" };
    } 
    else if (email === "keerthana@gmail.com") {
      user = { email, role: "admin" };
    } 
    else {
      user = { email, role: "buyer" };
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
      navigate("/admin");
    } 
    else if (user.role === "seller") {
      navigate("/seller");
    } 
    else {
      navigate("/home");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;