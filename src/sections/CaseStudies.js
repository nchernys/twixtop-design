import "./caseStudies.css";
import "./allElementsCSS.css";
import BecomeClient from "./BecomeClient";
import { useState } from "react";
import ShowCase from "./showCase";
import cases from "./casesData.js";

function CaseStudies() {
  const [popUp, setPopUp] = useState(false);
  const [caseShow, setCaseShow] = useState(false);
  const [galleryShow, setGalleryShow] = useState(0);
  const [id, setId] = useState(0);

  const handlePopUp = () => {
    setPopUp(true);
  };

  const handleFormSubmit = () => {
    setPopUp(false);
  };

  const handleShow = (val) => {
    setId(val);
    setCaseShow(true);
  };

  const handleClose = () => {
    setCaseShow(false);
  };

  const handleLeftArrow = () => {
    if (galleryShow > 2) {
      setGalleryShow(galleryShow - 3);
    } else if (galleryShow === 0) {
      setGalleryShow(cases.length - 4);
    }
  };

  const handleRightArrow = () => {
    if (galleryShow < cases.length - 4) {
      setGalleryShow(galleryShow + 3);
    } else {
      setGalleryShow(0);
    }
  };

  return (
    <>
      <div className="body-section" id="case-studies">
        <h3>Case Studies</h3>
        <div className="caseStudiesHeading">
          <span className="cases-subheading">
            Make your target audience choose you over your competitors{" "}
          </span>
          <span className="arrows">
            <span className="left-arrow" onClick={handleLeftArrow}>
              <img
                src="https://img.icons8.com/material-sharp/24/chevron-left.png"
                alt="chevron-left"
              />
            </span>
            <span className="right-arrow" onClick={handleRightArrow}>
              <img
                src="https://img.icons8.com/material-sharp/24/chevron-right.png"
                alt="chevron-left"
              />
            </span>
          </span>
        </div>
        <div className="section-wrapper">
          <div
            className="inner-case"
            id="id1"
            onClick={() => handleShow(galleryShow)}
          >
            <img src={cases[galleryShow].image} alt="case1" loading="lazy" />
          </div>
          <div
            className="inner-case"
            id="id2"
            onClick={() => handleShow(galleryShow + 1)}
          >
            <img
              src={cases[galleryShow + 1].image}
              alt="case2"
              loading="lazy"
            />
          </div>
          <div
            className="inner-case"
            id="id3"
            onClick={() => handleShow(galleryShow + 2)}
          >
            <img
              src={cases[galleryShow + 2].image}
              alt="case3"
              loading="lazy"
            />
          </div>
          <div className="inner-case violet-btn" id="id4" onClick={handlePopUp}>
            Become a Client
          </div>
        </div>
      </div>

      <div className={popUp ? "show" : "hidden"}>
        <BecomeClient onFormSubmit={handleFormSubmit} />
      </div>
      <div className={caseShow ? "show" : "hidden"}>
        <ShowCase onClose={handleClose} id={id} />
      </div>
    </>
  );
}

export default CaseStudies;
