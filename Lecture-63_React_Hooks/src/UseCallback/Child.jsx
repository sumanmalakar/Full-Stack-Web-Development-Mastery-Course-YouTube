import React, { useEffect } from 'react'

const Child = ({handleClick,counter1}) => {
    useEffect(() => {
     console.log("Child Component is rendering")
    }, [handleClick])
    
  return (
    <div>
        <h1>This is child Component = {counter1}</h1>
        <button onClick={handleClick}>Increase Child Counter</button>
    </div>
  )
}

export default Child