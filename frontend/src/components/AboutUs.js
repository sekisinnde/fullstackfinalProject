import React, { Component } from 'react';
import imgOumar from '../images/Oumar.JPG'
export default function AboutUs() {

    return (
    <div className='aboutUs'>
        <div className='itemUbout'>
            <img src={imgOumar} alt='Oumar' className='imgOumar'/>
        </div>
        <div className='itemUbout'>
            <img src={imgOumar} alt='Oumar' className='imgOumar'/>
        </div>
    </div>
    )
}
