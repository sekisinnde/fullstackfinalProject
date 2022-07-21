import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

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
        <div>
        <p>{toy.title}</p>
        <img src={toy.url}/>
        </div>
    )
}

export default Toy;