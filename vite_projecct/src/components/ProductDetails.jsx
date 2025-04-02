import React from 'react'
import PropTypes from 'prop-types'

const ProductDetails = (props) => {

    let {name, price} = props
  return (
    <section>
            <h3>{name} - {price} </h3>
            
    </section>
  )
}

export default ProductDetails

ProductDetails.proptype = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

ProductDetails.defaultProps = {
    name: "No Name",
    price: 0
}