import React, { useState } from "react";

const UseStateArray = () => {
  let bioData = [
    { id: 0, name: "umme", age: 22 },
    { id: 1, name: "salma", age: 23 },
    { id: 2, name: "ali", age: 25 },
  ];
  const [myBioData, setBioData] = useState(bioData);

  const claerData = () => {
    setBioData([]);
  };
  return (
    <>
      {myBioData.map((curElem) => {
        return (
          <h1 className="heading" key={curElem.id}>
            Name: {curElem.name} & Age: {curElem.age}: 25
          </h1>
        );
      })}
      <button className="btn" onClick={claerData}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
