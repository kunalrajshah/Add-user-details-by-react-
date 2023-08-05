import React from "react";

const Output = (props) => {
  return (
    <>
      {props.send.length > 0 ? (
        <div className="output-container">
          <div className="list-user">
            <ul>
              {props.send.map((data, index) => (
                <li key={index}>
                  {data.name} ({data.age} years old)
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Output;
