import React, { useReducer } from "react";
const initialValue = 0;
const Reducer = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (state > 0 && action.type === "DECREMENT") {
      return state - 1;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Reducer;
