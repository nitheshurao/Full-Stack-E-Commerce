import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/Actions/UserAction'
import './Header.css'

const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()


    const logoutnHandler = () => {
        console.log("Logout")
        dispatch(logout())
    }
    return (
        <div className='Header'>
            {/* <body> */}
            <div className="topnav">
                <Link to='/Login'>
                    {userInfo ? (

                        <div><Link to='/profile'>profile :{userInfo.name}</Link>
                            <button onClick={logoutnHandler}>Logout</button>
                        </div>) : <a>Login</a>}
                </Link>
                <a className="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <Link to='/cart'>Cart</Link>

                <div className="search-container">

                    <input type="text" placeholder="Search.." name="search"></input>


                    <button type="submit"><i className="fa fa-search"></i></button>

                </div>

            </div>
            {/* </body> */}
        </div >
    )
}

export default Header