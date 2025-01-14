import React from "react";

export default function HeroContent() {
  return (
    <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/image/Heroimg.jpg" // Replace with a dark artistic image URL
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
        Exploring the Wonders of Human Achievement
        </h1>
      </div>
    </div>
  );
}
