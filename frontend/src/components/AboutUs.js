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
                    <a href='https://github.com/karoffski'><h4>@karoffski</h4></a>
                    </div>
                </div><br></br>
                <p className='description'>Projet réalisé pour la soutenance finale </p>
                <p className='description'>de la formation tremplin auprès de chez Matrice.</p>
            </div>
    )
}

export default AboutUs;