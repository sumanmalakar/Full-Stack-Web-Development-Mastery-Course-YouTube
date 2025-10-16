import React, { useReducer } from "react";

const couterReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { counter: state.counter + 1 } 
    case "Decrement":
      return { counter: state.counter - 1 } 
    case "IncreaseBy10":  
      return { counter: state.counter + 10 } 
      case "reset" :
        return { counter: 0 };  

  }
};

const Index = () => {
  const [state, dispatch] = useReducer(couterReducer, { counter: 0 });

  return (
    <div>
      <h1>Counter = {state.counter}</h1>

      <button onClick={() => dispatch({ type: "Increment" })}>Increase</button>

      <button onClick={() => dispatch({ type: "Decrement" })}>Decrease</button>
      
      <button onClick={() => dispatch({ type: "IncreaseBy10" })}>Increaseby10</button>

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Index;
