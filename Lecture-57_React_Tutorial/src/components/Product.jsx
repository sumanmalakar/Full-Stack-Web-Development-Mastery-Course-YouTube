import React from 'react'

const Product = () => {
    const products = [
        {id:1, name:'iphone 16',price:68000},
        {id:2, name:'iphone 17',price:80000},
        {id:3, name:'iphone 17 pro max',price:128000},
    ]
  return (
    <div>
        {products.map(data=><div key={data.id}>
            <h1>{data.name}</h1>
            <p>{data.price}</p>
        </div>)}
    </div>
  )
}

export default Product