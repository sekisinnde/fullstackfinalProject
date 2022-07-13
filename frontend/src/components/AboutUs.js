import React from 'react';
import img from '../logo512.png';

const AboutUs = () => {
    return (
            <div className='aboutus'>
                <div className='images'>
                    <img src={img}/>
                    <img src={img}/>
                </div>
                <div className="names">
                    <h3>Oumar</h3>
                    <h3>Nicolas</h3>
                </div>
                <p className='description'>We are presenting our project</p>
            </div>
    )
}

export default AboutUs;