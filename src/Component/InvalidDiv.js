import React from "react";
import "../Component/InvalidDiv.css";

const InvalidDiv = (props) => {

  const resetError=()=>{
   props.reset(null);
  }
  return (
    <>
    <div className="backdrop"/>
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
    </>
  );
};
export default InvalidDiv;
