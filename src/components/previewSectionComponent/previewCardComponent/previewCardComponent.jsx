import React from 'react';
import './previewCardComponent.css';

export default function PreviewCardComponent({image}) {
  return(
    <div className="preview-card-wrapper">
      <img className="card-image" src={image}></img>
      <div className="sub-section-wrapper">
        <div className="sub-description-wrapper">
          <label className="address"> 1231232</label>
          <label className="phone-number"> ldfkaldkf</label>
        </div>
        <h1 className="sub-heading">Hashi Tamen</h1>
        <p className="sub-about">I brought my cousin here and she loved this place! I personally thought the broth of the spicy miso ramen was too spicy without having enough meat flavor. I like that the ramen came with egg without charging extra! The service was quick and prompt!
If you are in Flushing and can't make the trip to the city, this place will do.</p>
        <button className="btn sub-readmore-button sub-readmore-button__style">READ MORE</button>
      </div>
    </div>
  );
}