import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/Splash/Splash";
import Home from "./pages/Home";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;