import React, { createContext } from "react";
import ComC from "./ComC";
const myData = createContext();
const ComA = () => {
  return (
    <div>
      <myData.Provider value={"umme salma ali"}>
        <ComC></ComC>
      </myData.Provider>
    </div>
  );
};

export default ComA;
export { myData };
