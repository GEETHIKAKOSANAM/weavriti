import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>WeaVriti</h3>
          <p>Preserving India's handloom heritage.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#featured">Categories</a>
          <a href="#artisans">Artisans</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@weavriti.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 WeaVriti. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;