import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <body>
                <div class="topnav">
                    <a class="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <div class="search-container">

                        <input type="text" placeholder="Search.." name="search"></input>


                        <button type="submit"><i class="fa fa-search"></i></button>

                    </div>
                </div>
            </body>
        </div >
    )
}

export default Header