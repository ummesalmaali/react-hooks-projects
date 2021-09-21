import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats ( ${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);
  console.log("calling from outside of useeffect");

  useEffect(() => {
    console.log("i am good");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Here 🤣
      </button>
    </div>
  );
};

export default UseEffect;
