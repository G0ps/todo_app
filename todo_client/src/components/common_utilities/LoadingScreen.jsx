import { useState, useEffect } from "react";

function LoadingScreen() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 25 ? "." : prevDots + "."));
    }, 1000);

    // Cleanup timer when LoadingScreen unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dots">
      {dots}
    </div>
  );
}

export default LoadingScreen;
