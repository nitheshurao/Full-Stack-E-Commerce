import React, { useEffect } from 'react'
import './HomeScreen.css'
import products from '../../date/products'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../../componets/Product/Product'
import axios from 'axios'

const HomeScreen = () => {
    useEffect(() => {
        const pr = async () => {
            const { data } = await axios.get('http://localhost:5000/api/product/')
            console.log("data", data)
        }
        pr()

    }, [])
    return (
        <>
            <div className="grid-container">
                {products.map((product) => (

                    <Product product={product} />

                ))}
            </div>
            <h2>home</h2>
        </>
    )
}

export default HomeScreen