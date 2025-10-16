import React from 'react'

const Block = () => {
    const data = [
        {id :1, name:'ram@gmail.com',age:18},
        {id :2, name:'mohan@gmail.com',age:28},
        {id :3, name:'shoan@gmail.com',age:38},
    ]

  return (
    <div>{data.map(items=><div>
        <h1>{items.name}</h1>
        <p>{items.age}</p>
    </div>)}</div>
  )
}

export default Block