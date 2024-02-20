import React, { useState } from "react";
import "./Testimonials.css";
import "./allElementsCSS.css";
import testimonials from "./testimonialsData.js";

function Testimonials() {
  const [currentID, setCurrentID] = useState(0);
  const [nextID, setNextID] = useState(1);

  function handleLeftArrow() {
    let x;
    let y;
    if (currentID === 0) {
      x = testimonials.length - 1;
    } else {
      x = currentID - 1;
    }

    if (nextID === 0) {
      y = testimonials.length - 1;
    } else {
      y = nextID - 1;
    }
    setCurrentID(x);
    setNextID(y);
  }

  function handleRightArrow() {
    let x;
    let y;
    if (currentID === testimonials.length - 1) {
      x = 0;
    } else {
      x = currentID + 1;
    }

    if (nextID === testimonials.length - 1) {
      y = 0;
    } else {
      y = nextID + 1;
    }
    setCurrentID(x);
    setNextID(y);
  }

  return (
    <>
      <div className="body-section" id="testimonials">
        <div className="testimonial-heading">
          <h3>Testimonials</h3>
          <div className="arrows">
            <span className="left-arrow" onClick={handleLeftArrow}>
              <img
                src="https://img.icons8.com/material-sharp/24/chevron-left.png"
                alt="chevron-left"
              />
            </span>
            <span className="left-arrow" onClick={handleRightArrow}>
              <img
                src="https://img.icons8.com/material-sharp/24/chevron-right.png"
                alt="chevron-left"
              />
            </span>
          </div>
        </div>
        <div className="section-wrapper-nogrid testimonial-section">
          <div className="testimonial-item" key={testimonials[currentID].id}>
            <div className="testimonial-quote">
              {testimonials[currentID].quote}
            </div>
            <div className="testimonial-caption">
              {testimonials[currentID].author}
            </div>
          </div>

          <div
            className="testimonial-item second-item"
            key={testimonials[nextID].id}
          >
            <div className="testimonial-quote">
              {testimonials[nextID].quote}
            </div>
            <div className="testimonial-caption">
              {testimonials[nextID].author}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
