/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const BackgroundImage = ({ src, alt }) => {
  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 1,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: .5, //For Gallery opacity behind cards
  };

  return (
    <div style={backgroundStyle}>
      <img src={src || '/museum-crack1.jpg'} alt={alt} style={imgStyle} />
      <div style={overlayStyle} />
    </div>
  );
};

export default BackgroundImage;