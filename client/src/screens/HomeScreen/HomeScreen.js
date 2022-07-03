import React, { useEffect } from 'react'
import './HomeScreen.css'
import products from '../../date/products'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../../componets/Product/Product'
import { listProducts } from '../../redux/Actions/Action'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.ProductList)
    const { loading, error, products } = productList
    console.log("productList--", products)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <><div>


            <h1></h1>
            {
                loading ? <h1>Loadingg</h1> : error ? <h1>{error}</h1> : (<div className="grid-container">
                    {products.map((product) => (

                        <Product product={product} />

                    ))}
                </div>)
            }

        </div>
        </>
    )
}

export default HomeScreen