import React, { useState, useEffect } from "react";
import SlideContent from "./SliderContent";
import imageSlider from "./ImageSlider";
import Arrows from "./Arrows";
import Dots from "./Dots";
import "./Carousel.css";

const len = imageSlider.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slide-container">
      <SlideContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
