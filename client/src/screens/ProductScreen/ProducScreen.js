import React, { useEffect, useState } from 'react'
import './ProducScreen.css'
// import products from '../../date/products'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { PoductDetailPage } from '../../redux/Actions/Action'
import { Link } from 'react-router-dom'


const ProducScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const product = useSelector(state => state.ProductDetails).products
    console.log("prody---", product.products)
    const { loading, error, products } = product

    useEffect(() => {
        dispatch(PoductDetailPage(match.params.id))

    }, [dispatch, match])
    const AddToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    return (
        <div className='Product'>
            <Link to='/'>Go back</Link>
            <div className='Detail'>

                <img src={product.image} />
                <h1>Price:{product.price}</h1>
                <h1>rating:{product.rating}</h1>
                <h1>Status:{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</h1>
            </div>
            <div className='Cart'>
                <h2>
                    <button
                        onClick={AddToCartHandler}
                        disabled={product.countInStock === 0}>
                        Add to Cart
                    </button>

                </h2>
                {product.countInStock > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                                <Form.Control
                                    as='select'
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                >
                                    {[...Array(product.countInStock).keys()].map(
                                        (x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        )
                                    )}
                                </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
            </div>

        </div>
    )
}

export default ProducScreen