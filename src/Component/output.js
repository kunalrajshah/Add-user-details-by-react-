import React from "react";

const Output = (props) => {

  // For Delete that List on click.
  const deleteHandler=(ind)=>{
    const updatedData=[...props.send];
    updatedData.splice(ind,1);
    props.del(updatedData);
  }
  return (
    <>
      {props.send.length > 0 ? (
        <div className="output-container">
          <div className="list-user">
            <ul>
              {props.send.map((data, index) => (
                <li  key={index} onClick={()=>deleteHandler(index)}>
                  {data.name} ({data.age} years old) {data.college}
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
