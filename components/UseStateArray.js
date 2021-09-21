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
  const removeItem = (id) => {
    const filteredElm = myBioData.filter((curElm) => {
      return curElm.id !== id;
    });
    setBioData(filteredElm);
  };
  return (
    <>
      {myBioData.map((curElem) => {
        return (
          <h1 className="heading" key={curElem.id}>
            Name: {curElem.name} & Age: {curElem.age}
            <button className="innerBtn" onClick={() => removeItem(curElem.id)}>
              Remove
            </button>
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
