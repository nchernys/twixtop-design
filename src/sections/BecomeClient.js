import "./allElementsCSS.css";
import "./BecomeClient.css";
import { useRef } from "react";

function BecomeClient({ onFormSubmit }) {
  const formRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    formRef.current.reset();
    onFormSubmit();
  };

  const handleClose = () => {
    onFormSubmit();
  };

  return (
    <>
      <div className="pop-up">
        <div className="inner-pop-up">
          <div className="form-close" onClick={handleClose}>
            close
          </div>
          <div>
            <h2>Become Our Client</h2>
            <form ref={formRef} onSubmit={handleForm}>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                required
              />
              <input type="text" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Message"
                rows="8"
                required
              />
              <input type="submit" className="violet-btn" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeClient;
