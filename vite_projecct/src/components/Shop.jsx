import React, {useState} from 'react'
import ProductItm from './ProductItm'

const Shop = () => {

  let [product, setProduct] = useState( {name: "phone", price: 1000} )
  
  return (
    <div>
        <h1>Shop</h1>
        <ProductItm Product = {product} />
    </div>
  )
}

export default Shop