import React, { useEffect } from 'react'
import './ProducScreen.css'
import products from '../../date/products'
import axios from 'axios'


const ProducScreen = ({ match }) => {
    useEffect(() => {
        const pr = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/product/${match.params.id}`)
            console.log("data", data)
        }
        pr()

    }, [])
    console.log("---", match.params)
    const product = products.find(p => p._id === match.params.id)
    console.log("--product-", product)
    return (
        <div className='Product'>
            <img src={product.image} />
            <h1>Price:{product.price}</h1>
            <h1>rating:{product.rating}</h1>
        </div>
    )
}

export default ProducScreen