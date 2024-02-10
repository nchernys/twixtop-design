import "./showCase.css";
import cases from "./casesData";

function ShowCase({ onClose, id }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className="show-case">
        <div className="case-close" onClick={handleClose}>
          close
        </div>
        <div className="inner-show-case">
          <div className="case-image">
            <img src={cases[id].image} alt="image" />
          </div>
          <div className="case-description">
            <h2>{cases[id].heading}</h2>
            <p>{cases[id].description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowCase;
