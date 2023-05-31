import React from "react";
import "./Carousel.css";

function SlideContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <p className="slide-title">{slide.title}</p>
          <p className="slide-text">{slide.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SlideContent;
