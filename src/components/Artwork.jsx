/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import React from 'react'
=======
/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CountryCard from '../CountryCard';
import afghanistanData from '../components/Data.json/Afghanistan.json';
import ethiopiaData from '../components/Data.json/Ethiopia.json';
import iranData from '../components/Data.json/Iran.json';
import pakistanData from '../components/Data.json/Pakistan.json';
import usaData from '../components/Data.json/USA.json';

const countries = [
  { name: 'Afghanistan', data: afghanistanData, flag: '../components/Flags/Afghanistan.svg' },
  { name: 'Ethiopia', data: ethiopiaData, flag: '../components/Flags/Ethiopia.svg.png' },
  { name: 'Iran', data: iranData, flag: '../components/Flags/Iran.svg.png' },
  { name: 'Pakistan', data: pakistanData, flag: '../components/Flags/Pakistan.svg' },
  { name: 'United States of America', data: usaData, flag: '../components/Flags/USA.svg.webp' },
];

const CountryGallery = ({ country }) => {
  const navigate = useNavigate();
  const artworks = country.data;
>>>>>>> 7c11db38a20e970dc463bbc16734499aa40c7fbb

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{country.name} Gallery</h1>
      <button 
        onClick={() => navigate('/artwork')} 
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

const CountryList = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <h1 className="text-4xl font-bold mb-8 text-center">The Museum Gallery of the DCI World</h1>
    <div className="flex flex-wrap justify-center gap-8">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          name={country.name}
          flag={country.flag}
          mapUrl={`https://www.google.com/maps/place/${encodeURIComponent(country.name)}`}
        />
      ))}
    </div>
  </div>
);

const Artwork = () => {
  return (
    <Routes>
      <Route index element={<CountryList />} />
      {countries.map((country) => (
        <Route 
          key={country.name} 
          path={`gallery/${country.name.toLowerCase().replace(/\s+/g, '-')}`} 
          element={<CountryGallery country={country} />} 
        />
      ))}
    </Routes>
  );
};

export default Artwork;

