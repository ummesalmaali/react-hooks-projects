import React, { useEffect, useState } from "react";
const UseEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    console.log("add Event");

    return () => {
      console.log("remove event");
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div>
      <p>The actual size of the window is :</p>
      <h1>{widthCount}</h1>
    </div>
  );
};

export default UseEffect2;
