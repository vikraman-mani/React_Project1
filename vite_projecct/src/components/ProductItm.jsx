import React from 'react'
import ProductDetails from './ProductDetails'

const ProductItm = (props) => {

  let {Product} = props
  
  return (
    <div>
       <h5> Display Product Items</h5>
       <ProductDetails 
          name = {Product.name} 
          price = {Product.price}
       />
    </div>
  )
}

export default ProductItm