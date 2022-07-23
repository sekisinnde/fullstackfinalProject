import React from 'react';
import imgNico from '../Nicolas.jpg';
import imgOumar from '../Oumar.jpg';

const AboutUs = () => {
    return (
            <div className='aboutus'>
                <div className='images'>
                    <img src={imgOumar}/>
                    <img src={imgNico}/>
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