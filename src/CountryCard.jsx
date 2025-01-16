/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, mapUrl }) => {
  const cardStyle = {
    width: "18%", // 1/5
    minWidth: "200px",
    backgroundColor: "#000814", // bg-gray-800
    borderRadius: "0.5rem", // rounded-lg
    overflow: "hidden",
    boxShadow:
      "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    transition: "transform 0.3s",
    "&:hover": { transform: "scale(1.05)" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    padding: "1rem",
    textAlign: "center",
    color: "#f8f9fa",//country name color
  };

  const imgStyle = {
    display: "block",
    padding: "1rem",
    position: "relative",
    width: "100%",
    borderRadius: "0.5rem",
    transition: "opacity 0.3s",
    zIndex: 10,
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{name}</h2>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        <img src={flag} alt={`Flag of ${name}`} style={imgStyle} />
      </a>
      <Link
        to={`gallery/${name.toLowerCase().replace(/\s+/g, "-")}`}
        style={{
          display: "block",
          width: "100%",
          padding: "0.5rem 0",
          backgroundColor: "black",
          textAlign: "center",
          color: "#f8f9fa",//see gallery font color
          fontWeight: "600",
          textDecoration: "none",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "gray")}//gallery button
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#495057")}//gallery color button
      >
        See Gallery
      </Link>
    </div>
  );
};

export default CountryCard;
