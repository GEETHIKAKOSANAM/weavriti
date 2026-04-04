import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      shop: "Shop by Region",
    },
  },
  te: {
  translation: {
    shop: "ప్రాంతం ప్రకారం కొనండి",
  },
},
hi: {
    translation: {
      shop: "क्षेत्र के अनुसार खरीदें",
      filter: "फ़िल्टर",
      south: "दक्षिण भारत",
      north: "उत्तर भारत",
    },
  },
  ta: {
    translation: {
      shop: "பகுதி அடிப்படையில் வாங்குங்கள்",
      filter: "வடிகட்டி",
      south: "தென் இந்தியா",
      north: "வட இந்தியா",
    },
  },

  kn: {
    translation: {
      shop: "ಪ್ರದೇಶದ ಆಧಾರದ ಮೇಲೆ ಖರೀದಿಸಿ",
      filter: "ಫಿಲ್ಟರ್",
      south: "ದಕ್ಷಿಣ ಭಾರತ",
      north: "ಉತ್ತರ ಭಾರತ",
    },
  },

  ml: {
    translation: {
      shop: "പ്രദേശത്തിന്റെ അടിസ്ഥാനത്തിൽ വാങ്ങുക",
      filter: "ഫിൽട്ടർ",
      south: "ദക്ഷിണ ഇന്ത്യ",
      north: "വടക്കേ ഇന്ത്യ",
    },
  },

  bn: {
    translation: {
      shop: "অঞ্চল অনুযায়ী কিনুন",
      filter: "ফিল্টার",
      south: "দক্ষিণ ভারত",
      north: "উত্তর ভারত",
    },
  },

  mr: {
    translation: {
      shop: "प्रदेशानुसार खरेदी करा",
      filter: "फिल्टर",
      south: "दक्षिण भारत",
      north: "उत्तर भारत",
    },
  },

  gu: {
    translation: {
      shop: "પ્રદેશ અનુસાર ખરીદી કરો",
      filter: "ફિલ્ટર",
      south: "દક્ષિણ ભારત",
      north: "ઉત્તર ભારત",
    },
  },

  pa: {
    translation: {
      shop: "ਖੇਤਰ ਦੇ ਅਨੁਸਾਰ ਖਰੀਦੋ",
      filter: "ਫਿਲਟਰ",
      south: "ਦੱਖਣ ਭਾਰਤ",
      north: "ਉੱਤਰ ਭਾਰਤ",
    },
  },
};




i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;