import "./showCase.css";
import cases from "./casesData";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShowCase({ onClose, id }) {
  const [galleryView, setGalleryView] = useState(0);

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
          <img src="/icons/arrow-left-white.png" alt="arrow-left" />
        </span>
        <span className="right-arrow" onClick={handleRightArrow}>
          <img src="/icons/arrow-right-white.png" alt="arrow-right" />
        </span>
      </div>
      <div className="show-case">
        <div className="case-close" onClick={handleClose}>
          close
        </div>
        <div className="inner-show-case">
          <div className="case-image">
            <a href={cases[galleryView].image} target="_new">
              <LazyLoadImage
                src={cases[galleryView].image}
                alt="Lazy Loaded Image"
              />
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
