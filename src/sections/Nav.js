import "./Navigation.css";
import "./allElementsCSS.css";
import BecomeClient from "./BecomeClient";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Nav() {
  const [popUp, setPopUp] = useState(false);

  const handleFormSubmit = () => {
    setPopUp(false);
  };

  return (
    <>
      <div className="welcome-page">
        <div className="hero-image">
          <LazyLoadImage
            width="640"
            height="360"
            src="/images/red_welcome_sm.webp"
            alt="welcome-image"
          />
        </div>
        <div className="welcome-overlay">
          <nav className="nav-bar">
            <div className="nav-brand">
              <img src="/icons/logo.png" alt="welcome-image" />
              TwixTop
            </div>
            <ul>
              <li>
                <a href="#case-studies">Case Studies</a>
              </li>
              <li>
                <a href="#our-team">Our Team</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contacts">Contacts AB</a>
              </li>
            </ul>
          </nav>
          <div className="welcome-heading">
            <h1>
              The Best
              <br />
              Design Solutions <br />
              For Your Business{" "}
            </h1>
            <a href="#case-studies">
              <div className="get-started violet-btn">Get Started</div>
            </a>
          </div>
        </div>
        <div className={popUp ? "show" : "hidden"}>
          <BecomeClient onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}

export default Nav;
