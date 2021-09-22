import React, { useContext } from "react";
import { myData } from "./ComA";

const ComC = () => {
  const myName = useContext(myData);
  return (
    <div>
      <h1>this is for d c {myName}</h1>
    </div>
  );
};

export default ComC;
