import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let user;

    if (email === "sahasra@gmail.com" && password === "seller123") {
      user = { email, role: "seller", name: "Sahasra" };
    } else if (email === "keerthana@gmail.com" && password === "admin123") {
      user = { email, role: "admin", name: "Keerthana" };
    } else if (email === "marketing@weavriti.com" && password === "marketing123") {
      user = { email, role: "marketing", name: "Marketing Team" };
    } else {
      user = { email, role: "buyer", name: email.split("@")[0] };
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
      navigate("/admin");
    } else if (user.role === "seller") {
      navigate("/seller");
    } else if (user.role === "marketing") {
      navigate("/marketing");
    } else {
      navigate("/language");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;