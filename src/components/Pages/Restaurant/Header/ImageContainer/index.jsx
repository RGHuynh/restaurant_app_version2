import React from 'react';
import './index.css';

export default function ImageContainer({imageUrl, imageId}) {
  let ImageStyleProperties = {
    background: "url(" + imageUrl + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
  
  return(
    <div className="restaurant-image" id={imageId} style={ImageStyleProperties}>
    </div>
  )
}