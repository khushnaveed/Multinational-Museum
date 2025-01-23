/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import HeroImg from "../assets/images/HeroImage/HeroImg3.mp4";

export default function HeroContent() {
  const words = [
    "Exploring the Wonders of Human Achievement Through Time and Space",
    "በጊዜ እና በቦታ አማካኝነት የሰውን ልጅ ስኬት ድንቆች ማሰስ",
    "کاوش در شگفتی‌های دستاوردهای بشری در گذر زمان و مکان",
    "وقت اور جگہ میں انسانی کامیابیوں کے عجائبات کو دریافت کرنا۔",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loop % words.length];
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setLoop((prev) => prev + 1);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loop, words]);

  return (
    <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          /* autoPlay
          loop */
          muted
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
        
          className="w-full h-full object-cover opacity-60"
        >
          <source src={HeroImg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Title and content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-normal uppercase">{text}</h1>
        <h1 className="text-2xl md:text-4xl font-semibold mt-10">
          Welcome to Multinational Museum
        </h1>

        {/* Book Now Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/booking")}
            className="bg-gray-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-700 transition duration-300 mt-6"
          >
            Book Your Tickets Here
          </button>
        </div>
      </div>
    </div>
  );
}
