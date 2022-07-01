import React from 'react'
import './HomeScreen.css'
import products from '../../date/products'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../../componets/Product/Product'

const HomeScreen = () => {
    return (
        <><div className="grid-container">
            {products.map((product) => (

                <Product product={product} />

            ))}
        </div>
        </>
    )
}

export default HomeScreen