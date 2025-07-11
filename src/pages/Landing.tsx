import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const greetings = [
  { text: "HELLO", lang: "English" },
  { text: "HOLA", lang: "Spanish" },
  { text: "BONJOUR", lang: "French" },
  { text: "CIAO", lang: "Italian" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "你好", lang: "Chinese" },
  { text: "HALLO", lang: "German" },
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === greetings.length - 1) {
          setTimeout(() => {
            navigate("/home");
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-sand flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-8xl font-bold text-forest transition-all duration-500 animate-fade-in font-cormorant">
          {greetings[currentIndex].text}
        </h1>
        <p className="text-xl text-black font-tajawal">
          {greetings[currentIndex].lang}
        </p>
      </div>
    </div>
  );
};

export default Landing;