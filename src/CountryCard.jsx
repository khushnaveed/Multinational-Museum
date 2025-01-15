/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, mapUrl }) => {
  return (
    <div className="w-1/4 min-w-[150px] bg-black rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col justify-between custom-box-shadow">
      <h2 className="text-2xl font-semibold p-4 text-center">{name}</h2>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg"></div>
        <img
          src={flag}
          alt={`Flag of ${name}`}
          className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity duration-300 relative z-10"
        />
      </a>
      <Link
        to={`gallery/${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="block w-full py-2 bg-black text-center text-white font-semibold hover:bg-green-700 transition-colors duration-300"
      >
        See Gallery
      </Link>
    </div>
  );
};

export default CountryCard;

<style jsx>{`
  .custom-box-shadow {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`}</style>;
