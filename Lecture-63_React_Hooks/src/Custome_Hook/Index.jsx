import React from "react";

import { useFetch } from "./useFetch";

const Index = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log("Data fetching from custom hook ",data)

  if(loading) return <p>Loading data...</p>;
  if(error) return <p>Error :- {error}</p>

  return (
    <div>
      <h1>This is Index File</h1>
      {data.map((todos)=><li key={todos.id}>
         <h3>{todos.title}</h3>
      </li>)}
    </div>
  );
};

export default Index;
