import { useNavigate } from "react-router-dom";
import i18n from "../language";
import "./Language.css";

const Language = () => {
  const navigate = useNavigate();

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    navigate("/home");
    window.location.reload(); // refresh for instant change
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "te", name: "తెలుగు" },
    { code: "hi", name: "हिंदी" },
    { code: "ta", name: "தமிழ்" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "ml", name: "മലയാളം" },
    { code: "bn", name: "বাংলা" },
    { code: "mr", name: "मराठी" },
    { code: "gu", name: "ગુજરાતી" },
    { code: "pa", name: "ਪੰਜਾਬੀ" },
  ];

  return (
    <div className="language-container">
      <h2>Select Your Language</h2>

      <div className="language-grid">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className="language-card"
            onClick={() => selectLanguage(lang.code)}
          >
            {lang.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;