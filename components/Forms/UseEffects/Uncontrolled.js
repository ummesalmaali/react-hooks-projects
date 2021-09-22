import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = ref.current.value;
    name === "" ? alert("plz fill the data ") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="luckyName">Enter your lucky name</label>
          <input type="text" ref={ref} />
        </div>
        <button>Submit</button>
      </form>
      <p>{show ? `your lucky name is ${ref.current.value}` : ""}</p>
    </div>
  );
};

export default Uncontrolled;
