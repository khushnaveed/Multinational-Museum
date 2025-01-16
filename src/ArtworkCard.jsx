/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import BackgroundImage from "./components/BackgroundImage";

const ArtworkCard = ({ artwork }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "450px", //card width
    height: "500px", //card height
    /* backgroundColor: '#4B5563', // bg-gray-800 */
    borderRadius: "0.5rem", // rounded-lg
    overflow: "hidden",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    position: "relative",
    transition: "transform 2s",
    cursor: "pointer",
  };

  const bookContainerStyle = {
    position: "relative",
    height: "100%",
    perspective: "1000px", // Enables the 3D effect
    transformStyle: "preserve-3d", // Allows children to be transformed
  };

  const bookCoverStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "visible", // Hides the back of the card when flipped
    transition: "transform 2.0s", // Smooth transition for flip effect (speed)
    zIndex: 2,
    transformOrigin: "left", // Flip around the left edge
    transform: isHovered ? "rotateY(-80deg)" : "rotateY(0deg)", // Adjust based on state
  };

  const bookContentStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden", // Hides the cover when flipped
    transform: isHovered ? "rotateY(0deg)" : "rotateY(200deg)", // Adjust based on state
    backgroundColor: "#212529",
    padding: "1rem",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)} // Set state to true on hover
      onMouseLeave={() => setIsHovered(false)} // Reset state on mouse leave
    >
      <div style={bookContainerStyle}>
        <div style={bookCoverStyle}>
          <img
            src={artwork.imageUrl || "/bg9.webp?height=256&width=256"}
            alt={artwork.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={bookContentStyle}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: "800",
              marginBottom: "1rem",
            }}
          >
            {artwork.title}
          </h2>
          <p style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>
            Artist: {artwork.artist}
          </p>
          <p style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>
            Year: {artwork.year}
          </p>
          <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
            Category: {artwork.category}
          </p>
          <p style={{ fontSize: "0.875rem" }}>{artwork.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
