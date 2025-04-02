import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from '../App'

const ProductDetails = (props) => {

    let {name = "no name", price=0} = props

    let {user} = useContext(UserContext);

  return (
    <section>
            <h3>{name} - {price} </h3>
            <h4> {user.name} - {user.age} </h4>
    </section>
  )
}

export default ProductDetails

ProductDetails.proptype = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
