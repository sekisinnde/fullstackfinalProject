import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
                <spam>Project Capstone</spam>
                <spam><Link to="/aboutus">About Us</Link></spam>
                <spam>Created by Nicolas & Oumar</spam>
        </div>
    )
}

export default Footer;