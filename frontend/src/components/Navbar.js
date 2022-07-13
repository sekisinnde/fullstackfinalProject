import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import img from '../logo512.png';

const Navbar = () => {
    
    return (
            <div  className="navbar">
            <p>MarketPlace</p>
            <p>Forum</p>
            <img className="logo" src={img}/>
            <p>Shopping Cart</p>
            <Link to='/inscription'>Inscription</Link>
            </div>
    )
}

export default Navbar;