import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>
        valu: <span>{state}</span>
      </h1>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        dec
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        inc
      </button>
    </div>
  );
};

export default Counter;
