import React from 'react'

const ProductItm = (props) => {

  let {Product} = props
  
  return (
    <div>
       <h5> Display Product Items</h5>
       <section>
        <h1> {Product.name} </h1>
        <h2> {Product.price} </h2>
       </section>
    </div>
  )
}

export default ProductItm