import "./caseStudies.css";
import "./allElementsCSS.css";
import BecomeClient from "./BecomeClient";
import { useState } from "react";
import ShowCase from "./showCase";

function CaseStudies() {
  const [popUp, setPopUp] = useState(false);
  const [caseShow, setCaseShow] = useState(false);
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

  return (
    <>
      <div className="body-section" id="case-studies">
        <h3>Case Studies</h3>
        <p>Make your target audience choose you over your competitors</p>
        <div className="section-wrapper">
          <div className="inner-case" id="id1" onClick={() => handleShow(0)}>
            <img src="/images/case1.jpg" alt="case1" />
          </div>
          <div className="inner-case" id="id2" onClick={() => handleShow(1)}>
            <img src="/images/case2.jpg" alt="case2" />
          </div>
          <div className="inner-case" id="id3" onClick={() => handleShow(2)}>
            <img src="/images/case3.jpg" alt="case3" />
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
