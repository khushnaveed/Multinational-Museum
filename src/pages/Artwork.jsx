/* eslint-disable no-unused-vars */

import React from "react";
import { Routes, Route } from "react-router-dom";
import CountryCard from "./CountryCard";
import afghanistanData from "../DataForArtwork/Afghanistan.json";
import ethiopiaData from "../DataForArtwork/Ethiopia.json";
import iranData from "../DataForArtwork/Iran.json";
import pakistanData from "../DataForArtwork/Pakistan.json";
import usaData from "../DataForArtwork/USA.json";
import CountryGallery from "./CountryGallery";

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
  {
    name: "Iran",
    data: iranData,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iran_State_Flag.jpg/320px-Iran_State_Flag.jpg",
  },
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

const Artwork = () => {
  return (
    <Routes>
      <Route index element={<CountryList />} />
      {countries.map((country) => (
        <Route
          key={country.name}
          path={`gallery/${country.name.toLowerCase().replace(/\s+/g, "-")}`}
          element={<CountryGallery country={country} />}
        />
      ))}
    </Routes>
  );
};

const CountryList = () => (
  <div className="min-h-screen bg-black text-white p-8 relative"> {/* title and main background color*/}
    <h1 className="text-4xl font-bold mb-8 text-center">
      DCI Student Museum   
    </h1>
    <div className="flex flex-wrap justify-center gap-8">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          name={country.name}
          flag={country.flag}
          mapUrl={`https://www.google.com/maps/place/${encodeURIComponent(
            country.name
          )}`}
        />
      ))}
    </div>
  </div>
);

export default Artwork;
