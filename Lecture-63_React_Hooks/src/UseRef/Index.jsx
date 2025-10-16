import React, { useRef } from "react";

const Index = () => {
  const bgRef = useRef(null);

  const changeBg = () => {
    const colors = ["yellow", "pink", "blue", "orange", "purple", "black"];
    bgRef.current.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // setbg(colors[Math.floor(Math.random() * colors.length)]);
  };
  console.log("Re - rendered Components");

  return (
    <div
      ref={bgRef}
      style={{
        height: "100vh",
        // backgroundColor: ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={changeBg}>Change Background</button>
    </div>
  );
};

export default Index;
