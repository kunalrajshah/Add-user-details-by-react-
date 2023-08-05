import React, { useState, useRef } from "react";
import InvalidDiv from "./InvalidDiv";

const Form = (props) => {
  // Using ref hook
  const nameInputRef = useRef();
  const AgeInputRef = useRef();

  // const [inputText, setInputText] = useState("");
  // const [inputAge, setInputAge] = useState("");
  const [showInvalidDiv, setShowInvalidDiv] = useState();

  // const textHandler = (event) => {
  //   setInputText(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setInputAge(event.target.value);
  // };

  const getDataHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = AgeInputRef.current.value;

    const obj = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    // Form Validation
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setShowInvalidDiv({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      //+ is used to convert string into number
      setShowInvalidDiv({
        title: "Invalid Age",
        message: "Please enter a Valid age (> 0)",
      });
      return;
    }
    // Sending Data to another component
    props.get(obj);
    // Clear input data
    nameInputRef.current.value = "";
    AgeInputRef.current.value = "";
  };

  return (
    <>
      {/* If showInvalidDiv is truthy (not false, null, undefined, 0, or an empty string), the expression will evaluate to the value on the right-hand side (...). Otherwise, if showInvalidDiv is falsy, the expression will be false, and nothing will be rendered. */}
      {showInvalidDiv && (
        <InvalidDiv
          title={showInvalidDiv.title}
          message={showInvalidDiv.message}
          reset={setShowInvalidDiv}
        />
      )}
      <div className="container">
        <form>
          <label>User Name</label>
          <br />
          <input
            type="text"
            /*value={inputText} onChange={textHandler}*/ ref={nameInputRef}
          ></input>
          <br />
          <label>Age(In Years)</label>
          <br />
          <input
            type="number"
            /*value={inputAge} onChange={ageHandler}*/ ref={AgeInputRef}
          ></input>
          <br />
          <button onClick={getDataHandler}>Add Users</button>
        </form>
      </div>
    </>
  );
};

export default Form;
