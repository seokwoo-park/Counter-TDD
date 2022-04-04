import React, { useState } from "react";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    if (count <= 0) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <button onClick={increase}>+</button>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
    </>
  );
};

export default Counter;
