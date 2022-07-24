import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

const Toy = () => {
    
    let params = useParams()

    const [toy, setToy] = useState([]);

    useEffect(() => {
        getToy();
    }, [])

    const getToy = () => {
        axios.get(`http://localhost:5000/toys/${params.id}`)
        .then(res => {
            setToy(res.data)
        })
    }
    
    return (
        <div className='toypage'>
        <p className='title'>{toy.title} - {toy.author}</p>
        <img className='toypic' alt={toy.title} src={toy.img}/>
        <p>{toy.price}€</p>
        <Button 
        sx={{width: "25%", height: "8vh",color: "white", backgroundColor: '#64AB65',"&:hover": {backgroundColor: "#54B1A7"}}}
        >
        Ajouter au panier</Button>
        </div>
    )
}

export default Toy;