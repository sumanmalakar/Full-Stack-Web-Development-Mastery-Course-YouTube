import React, { useLayoutEffect, useState } from "react";

const Index = () => {
  const [color, setcolor] = useState("black");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); // dependency array
  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2 style={{margin:'10px'}}>Current Bg Color = {color}</h2>

        <button onClick={() => setcolor("lightcoral")}>Red</button>
        <button onClick={() => setcolor("lightgreen")}>Green</button>
        <button onClick={() => setcolor("lightblue")}>Blue</button>

      </div>
    </div>
  );
};

export default Index;
