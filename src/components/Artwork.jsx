/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CountryCard from "../CountryCard";
import afghanistanData from "../components/Data.json/Afghanistan.json";
import ethiopiaData from "../components/Data.json/Ethiopia.json";
import iranData from "../components/Data.json/Iran.json";
import pakistanData from "../components/Data.json/Pakistan.json";
import usaData from "../components/Data.json/USA.json";

const countries = [
  {
    name: "Afghanistan",
    data: afghanistanData,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_Afghanistan_%281931%E2%80%931973%29.svg/2560px-Flag_of_Afghanistan_%281931%E2%80%931973%29.svg.png",
  },
  {
    name: "Ethiopia",
    data: ethiopiaData,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1280px-Flag_of_Ethiopia.svg.png",
  },
  { name: "Iran", data: iranData, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iran_State_Flag.jpg/320px-Iran_State_Flag.jpg" },
  {
    name: "Pakistan",
    data: pakistanData,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png",
  },
  {
    name: "United States of America",
    data: usaData,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png",
  },
];

const BackgroundImage = ({ src, alt }) => (
  <div className="absolute inset-0 z-0">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
);

const CountryGallery = ({ country }) => {
  const navigate = useNavigate();
  const artworks = country.data;

  return (
    <div className="min-h-screen bg-black text-white p-8 relative">
      <BackgroundImage 
        src="/stars2.webp?height=1080&width=1920"
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
            <div key={index} className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 custom-box-shadow">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                <img
                  src={artwork.imageUrl || '/Museum-bg1.jpg?height=256&width=256'}
                  alt={artwork.title}
                  className="w-full h-full object-cover rounded-t-lg relative z-10"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
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
    </div>
  );
};

const CountryList = () => (
  <div className="min-h-screen bg-gray-800 text-white p-8 relative">
    <BackgroundImage 
     src="/earth.gif?height=1080&width=1920" 
      alt="Country list background" 
    />
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-8 text-center">The DCI Student Museum Gallery</h1>
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

<style jsx>{`
  .custom-box-shadow {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`}</style>
