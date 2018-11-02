import React from 'react';
import PreviewCardComponent from './previewCardComponent/previewCardComponent';
import './previewSectionComponent.css';

export default function PreviewSectionComponent(){
  return(
    <section className="preview--wrapper">
      <h1 className="preview-heading__size preview-heading__color">See The Best Restaurant In Your Area</h1>
      <div>
        <PreviewCardComponent />
        <PreviewCardComponent />
      </div>
    </section>
  );
}