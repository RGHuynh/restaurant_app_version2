import React from 'react';
import './index.css';

export default function PreviewCardComponent({restaurantName, image, location, phone}) {

  const imageUrl = {
    background: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
  
  return(
    <div className="section card-wrapper">
      <div className="card-image" style={imageUrl}></div>
      <div className="sub-card-wrapper">
        <div className="sub-description-wrapper">
          <label className="address">{location}</label>
          <label className="phone-number"> {phone}</label>
        </div>
        <h1 className="sub-heading">{restaurantName}</h1>
        <p className="sub-about">I brought my cousin here and she loved this place! I personally thought the broth of the spicy miso ramen was too spicy without having enough meat flavor. I like that the ramen came with egg without charging extra! The service was quick and prompt!
If you are in Flushing and can't make the trip to the city, this place will do.</p>
        <button className="btn sub-readmore-button sub-readmore-button__style">READ MORE</button>
      </div>
    </div>
  );
}