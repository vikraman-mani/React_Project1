import React from 'react'

const ProductDetails = (props) => {

    let {name, price} = props
  return (
    <section>
            <h3>{name} - {price} </h3>
            
    </section>
  )
}

export default ProductDetails