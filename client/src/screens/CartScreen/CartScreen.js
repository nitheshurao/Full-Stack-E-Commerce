import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../redux/Actions/CartAction'
import './CartScreen.css'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'

function CartScreen({ match, history, location }) {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart


    useEffect(() => {
        console.log("cart screee.", cartItems)
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    const removeFromCartHandler = (id) => {
        console.log("remove--id", id)
        dispatch(removeFromCart(id))
  
    }
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    return (
        <div className='Carts'>
            {cartItems.length === 0 ? (<h1>Your card is empty</h1>) :
                (
                    <div>{cartItems.map(i => (
                        <div className='Cart'>
                            <h1>name:{i.name}</h1>
                            <h1>Q:{i.qty}</h1>
                            <h1>Price:{i.price}</h1>

                            <Link to={`/product/${i.product}`}><h1>pLink</h1></Link>
                            <Form.Control
                                as='select'
                                value={i.qty}
                                onChange={(e) =>
                                    dispatch(
                                        addToCart(i.product, Number(e.target.value))
                                    )
                                }
                            >
                                {[...Array(i.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </Form.Control>
                            <Button
                                type='button'
                                variant='light'
                                onClick={() => removeFromCartHandler(i.product)}
                            >
                                <i className='fas fa-trash'></i>
                            </Button>
                        </div>
                    ))}

                    </div>

                )
            }
            <div>
                <h1>Subtotal: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h1>
                <h1>total Rs{cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}</h1>
                <Button
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                >
                    Proceed To Checkout
                </Button>
            </div>

        </div>
    )
}

export default CartScreen