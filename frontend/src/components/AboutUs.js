import React from 'react';
import imgNico from '../Nicolas.jpg';
import imgOumar from '../Oumar.jpg';

const AboutUs = () => {
    return (
            <div className='aboutus'>
                <div className='images'>
                    <img className='image' alt='Oumar' src={imgOumar}/>
                    <img className='image' alt='Nicolas' src={imgNico}/>
                </div>
                <div className="names">
                    <div>
                    <h3>Oumar Sekisinde</h3>
                    <a href='https://github.com/sekisinnde'><h4>@sekisinnde</h4></a>
                    </div>
                    <div>
                    <h3>Nicolas Caroff</h3>
                    <a href='https://github.com/karoffski'><h4>@Karoffski</h4></a>
                    </div>
                </div>
                <p className='description'>Projet réalisé pour la soutenance finale de la formation Tremplin.</p>
            </div>
    )
}

export default AboutUs;