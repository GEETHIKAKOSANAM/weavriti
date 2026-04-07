import { useTranslation } from "react-i18next";

const SpeakerButton = ({ textKey, textValue }) => {
  const { t, i18n } = useTranslation();

  const speakText = () => {
    const textToSpeak = textValue || t(textKey);

    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    const langMap = {
      en: "en-US",
      te: "te-IN",
      hi: "hi-IN",
      ta: "ta-IN",
      kn: "kn-IN",
      ml: "ml-IN",
    };

    const selectedLang = langMap[i18n.language] || "en-US";
    utterance.lang = selectedLang;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    const loadAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();

      let matchingVoice =
        voices.find((voice) => voice.lang === selectedLang) ||
        voices.find((voice) => voice.lang.startsWith(selectedLang.split("-")[0])) ||
        voices.find((voice) => voice.lang === "en-US");

      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = loadAndSpeak;
    } else {
      loadAndSpeak();
    }
  };

  return (
    <button
      onClick={speakText}
      style={{
        marginLeft: "8px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "18px",
      }}
      aria-label="Speak text"
      title="Listen"
    >
      🔊
    </button>
  );
};

export default SpeakerButton;