import React from "react";

const ToDo = () => {
  const triggerTask = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      {/* <h1>{e.target.value}</h1> */}
      <input
        type="text"
        placeholder="add your task"
        id="task"
        name="task"
        value=""
        onChange={() => {
          e.target.value;
        }}
      />
    </div>
  );
};

export default ToDo;
