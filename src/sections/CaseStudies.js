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
            <img
              src="https://images.unsplash.com/photo-1619241638225-14d56e47ae64?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </div>
          <div className="inner-case" id="id2" onClick={() => handleShow(1)}>
            <img
              src="https://images.unsplash.com/photo-1679678691006-3afa56204979?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image description"
            />
          </div>
          <div className="inner-case" id="id3" onClick={() => handleShow(2)}>
            <img
              src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image description"
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
