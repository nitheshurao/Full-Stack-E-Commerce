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
                            <h1>Price:{product.price}</h1>
                        </div>
                        <div>
                            <h1>Rating:{product.rating}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
