/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountryGallery = ({ country }) => {
  const navigate = useNavigate();
  const artworks = country.data;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{country.name} Gallery</h1>
      <button 
        onClick={() => navigate('/')} 
        className="mb-4 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 inline-block"
      >
        ← Back to Countries
      </button>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {artworks.map((artwork, index) => (
          <div key={index} className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="relative h-64 overflow-hidden">
              <img
                src={artwork.imageUrl || '/placeholder.svg?height=256&width=256'}
                alt={artwork.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-4">{artwork.description}</p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
              <p className="text-sm mb-1">Artist: {artwork.artist}</p>
              <p className="text-sm mb-1">Year: {artwork.year}</p>
              <p className="text-sm mb-2">Category: {artwork.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryGallery;

