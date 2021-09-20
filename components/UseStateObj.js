import React, { useState } from "react";

const UseStateObj = () => {
  const [myObjectData, setMyObjectData] = useState({
    myName: "umme",
    age: 24,
    myJob: "developer",
  });
  const changeName = () => {
    setMyObjectData({ ...myObjectData, myJob: "doctor" });
  };
  return (
    <div>
      <h1>
        {myObjectData.myName} age: {myObjectData.age} job: {myObjectData.myJob}
      </h1>
      <button className="btn" onClick={changeName}>
        Update
      </button>
    </div>
  );
};

export default UseStateObj;
