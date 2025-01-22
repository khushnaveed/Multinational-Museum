/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, mapUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "25%", // 1/5
    minWidth: "200px",
    backgroundColor: "#000000", // Country Card individual background color
    borderRadius: "0.5rem", // rounded-lg
    overflow: "hidden",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    transform: isHovered ? "scale(1.05)" : "scale(1)", // Adjust scale based on hover state
    transition: "transform 0.3s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative", // Position relative for background
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("https://preview.colorkit.co/color/1f2937.png?size=wallpaper&static=true")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 1.0,
    zIndex: -1,
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    padding: "1rem",
    textAlign: "center",
    color: "#f8f9fa", // country name color
    zIndex: 1,
  };

  const imgStyle = {
    display: "block",
    padding: "1rem",
    width: "100%",
    borderRadius: "0.5rem",
    transition: "opacity 0.3s",
    zIndex: 1,
  };

  const linkStyle = {
    display: "block",
    width: "100%",
    padding: "0.5rem 0",
    backgroundColor: "#2563eb", // gallery button color
    textAlign: "center",
    color: "#f8f9fa", // see gallery font color
    fontWeight: "600",
    textDecoration: "none",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={backgroundStyle}></div>
      <h2 style={titleStyle}>{name}</h2>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        <img src={flag} alt={`Flag of ${name}`} style={imgStyle} />
      </a>
      <Link
        to={`gallery/${name.toLowerCase().replace(/\s+/g, "-")}`}
        style={linkStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "gray")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#495057")
        }
      >
        See Gallery
      </Link>
    </div>
  );
};

export default CountryCard;