import React, { useState, useCallback } from "react";
import Child from "./Child";

const Index = () => {
  const [counter1, setcounter1] = useState(0);

  const [counter2, setcounter2] = useState(0);

  const handleClick = useCallback(() => {
    setcounter1(counter1 + 1);
  }, [counter1]);

  return (
    <div>
      <h1>Counter at Parent = {counter2}</h1>

      <button onClick={() => setcounter2(counter2 + 1)}>
        Increase Parent Counter
      </button>

      <Child handleClick={handleClick} counter1={counter1} />
    </div>
  );
};

export default Index;
