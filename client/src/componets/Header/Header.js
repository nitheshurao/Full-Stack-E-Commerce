import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            {/* <body> */}
            <div className="topnav">
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