import React, { useState } from "react";
import "./Component/Form.css";
import Form from "./Component/Form";
import "./Component/output.css";
import Output from "./Component/output";

const App = () => {
  const[rcvData,setRcvData]=useState([]);
  const getData=(data)=>{
    setRcvData((prevData)=>{
      return [...prevData,data];
    });
  }

  return (
    <div>
      <Form get={getData} />
      <Output send={rcvData} />
    </div>
  );
};

export default App;
