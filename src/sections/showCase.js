import "./showCase.css";
import cases from "./casesData";
import { useState, useEffect } from "react";

function ShowCase({ onClose, id }) {
  const [galleryView, setGalleryView] = useState(0);
  const [openImg, setOpenImg] = useState(false);

  useEffect(() => {
    setGalleryView(id);
  }, [id]);

  const handleClose = () => {
    onClose();
  };

  const handleLeftArrow = () => {
    if (galleryView === 0) {
      setGalleryView(cases.length - 1);
    } else {
      setGalleryView(galleryView - 1);
    }
  };

  const handleRightArrow = () => {
    if (galleryView === cases.length - 1) {
      setGalleryView(0);
    } else {
      setGalleryView(galleryView + 1);
    }
  };

  return (
    <>
      <div className="arrows gallery-arrows">
        <span className="left-arrow" onClick={handleLeftArrow}>
          <img
            src="https://img.icons8.com/material-sharp/24/ffffff/chevron-left.png"
            alt="chevron-left"
          />
        </span>
        <span className="right-arrow" onClick={handleRightArrow}>
          <img
            src="https://img.icons8.com/material-sharp/24/ffffff/chevron-right.png"
            alt="chevron-left"
          />
        </span>
      </div>
      <div className="show-case">
        <div className="case-close" onClick={handleClose}>
          close
        </div>
        <div className="inner-show-case">
          <div className="case-image">
            <a href={cases[galleryView].image} target="_new">
              <img src={cases[galleryView].image} alt="image" />
            </a>
          </div>
          <div className="case-description">
            <h2>{cases[galleryView].heading}</h2>
            <p>{cases[galleryView].description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowCase;
