import "./allElementsCSS.css";
import "./Contacts.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Contacts() {
  return (
    <>
      <div className="footer-page" id="contacts">
        <div className="footer-overlay">
          <div className="footer-address">
            <div>
              <LazyLoadImage
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="facebook"
              />
              <LazyLoadImage
                src="https://img.icons8.com/ios-filled/50/ffffff/telegram.png"
                alt="telegram"
              />
              <LazyLoadImage
                src="https://img.icons8.com/ios-filled/50/ffffff/behance.png"
                alt="behance"
              />
            </div>
            fake-info@twixtop.com <br />
            108 east main street, unit 7, durham, nc 27510
          </div>
          <div style={{ color: "rgba(0,0,0,0.2)" }}>
            <a
              href="https://nchernysheva.com"
              style={{ color: "rgba(0,0,0,0.2)", fontSize: ".8rem" }}
            >
              WebDev
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
