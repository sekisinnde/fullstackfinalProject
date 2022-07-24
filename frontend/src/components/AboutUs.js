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
                    <h3>Oumar Sekisinnde</h3>
                    <a href='https://github.com/sekisinnde'><h4>@sekisinnde</h4></a>
                    </div>
                    <div>
                    <h3>Nicolas Caroff</h3>
                    <a href='https://github.com/karoffski'><h4>@Karoffski</h4></a>
                    </div>
                </div><br></br><br></br>
                <p className='description'>Projet réalisé pour la soutenance finale de la formation tremplin auprès de chez Matrice.</p>
            </div>
    )
}

export default AboutUs;