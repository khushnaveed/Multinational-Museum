/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from 'react-router-dom';
import BackgroundImage from "../components/BackgroundImage"
import ArtworkCard from './ArtworkCard';

const CountryGallery = ({ country }) => {
  const navigate = useNavigate();
  const artworks = country.data;

  return (
    <div className="min-h-screen bg-black text-white p-8 relative">
      <BackgroundImage
        src="/b.jpg?height=1080&width=1920"//Country Gallery background image
        alt={`${country.name} background`}
      />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">{country.name} Gallery</h1>
        <button
          onClick={() => navigate('/artwork')}
          className="mb-4 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 inline-block"
        >
          ← Back to Countries
        </button>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {artworks.map((artwork, index) => (
            <ArtworkCard key={index} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryGallery;




