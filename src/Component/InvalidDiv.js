import React from "react";
import "../Component/InvalidDiv.css";
import ReactDom from "react-dom";

const InvalidDiv = (props) => {
  const resetError = () => {
    props.reset(null);
  };

  // For React Portal
  const Backdrop = () => {
    return  <div className="backdrop"/>;
  };

  const InvalidContainer = (props) => {
    return (
      <div className="invalid-container">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button onClick={resetError}>Okay</button>
        </footer>
      </div>
    );
  };

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <InvalidContainer title={props.title} message={props.message} />,
        document.getElementById('invalid-container-root')
      )}
      {/* <div className="backdrop"/>
    <div className="invalid-container">
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button onClick={resetError}>Okay</button>
      </footer>
    </div> */}
    </>
  );
};
export default InvalidDiv;
