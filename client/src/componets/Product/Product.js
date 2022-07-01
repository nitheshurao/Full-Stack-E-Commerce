import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
export const Product = ({ product }) => {

    return (
        <>
            <div className="grid-item">
                <Link to={`/product/${product._id}`}>
                    <img className='imge' src={product.image} />
                    <div> <h6> {product.name}</h6> </div>
                    <div className="Price">
                        <div>
                            <h>Price:{product.price}</h>
                        </div>
                        <div>
                            <h>Rating:{product.rating}</h>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
