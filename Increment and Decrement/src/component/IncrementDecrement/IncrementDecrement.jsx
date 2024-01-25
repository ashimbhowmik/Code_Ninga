import { useState } from "react";

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);
  const increments = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    if (count <= 0) {
      alert("Its not possible to decrease the value");
    } else {
      setCount((c) => c - 1);
    }
  };
  return (
    <div
      style={{
        background: "#F0F6FB",
        border: "1 px solid black",
        padding: 20,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="text-red">Increment & decrement counter</h1>
      <p
        style={{
          fontSize: 24,
        }}
      >
        Count : {count}
      </p>
      <div
        style={{
          display: "flex",
          gap: 15,
        }}
      >
        <button
          style={{
            border: "none",
            background: "red",
            padding: 10,
            borderRadius: 10,
            color: "white",
            fontSize: 18,
          }}
          onClick={increments}
        >
          Increment
        </button>
        <button
          style={{
            border: "none",
            background: "red",
            padding: 10,
            borderRadius: 10,
            color: "white",
            fontSize: 18,
          }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrement;
