import React, { useState } from 'react'
import Product from './components/Product';
import District from './components/District';
import Block from './components/Block';
import StateGov from './components/StateGov';
const App = () => {
  const [counter, setcounter] = useState(0);
  
  const increase = () => {
    setcounter(counter+1)
  }
  const decrase = () =>{
    setcounter(counter-1)
  }
  const data = [
    {id:1, price:1000, gmail:"ram@gamil.com"},
    {id:2, price:2000, gmail:"shiv@gamil.com"},
    {id:3, price:3000, gmail:"mohan@gamil.com"},
  ]
  return (
    <>
    <div>
      <District />
      <Block />
      <StateGov />
    </div>
    <div>
      <h1>Counter = {counter}</h1>
      <button onClick={increase}>Incrase</button>
      <button onClick={decrase}>Decrase</button>
    </div>
    <Product />
    </>
  )
}

export default App