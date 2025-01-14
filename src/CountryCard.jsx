/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, mapUrl }) => {
  return (
    <div className="w-1/5 min-w-[200px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col justify-between">
      <h2 className="text-2xl font-semibold p-4 text-center">{name}</h2>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4"
      >
        <img
          src={flag}
          alt={`Flag of ${name}`}
          className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity duration-300"
        />
      </a>
      <Link 
        to={`gallery/${name.toLowerCase().replace(/\s+/g, '-')}`}
        className="block w-full py-2 bg-blue-600 text-center text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
      >
        See Gallery
      </Link>
    </div>
  );
};

export default CountryCard;

