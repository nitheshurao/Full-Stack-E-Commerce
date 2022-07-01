import React from 'react'
import './Product.css'

export const Product = ({ product }) => {

    return (
        <>
            <div className="grid-item">
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
            </div>
        </>
    )
}
