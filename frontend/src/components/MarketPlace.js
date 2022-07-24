import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';

const MarketPlace = () => {
    let [data, setData] = useState([]);
    let [search, setSearch] = useState(``);
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch("http://localhost:5000/toys")
            .then((res) => {return res.json()})
            .then((res) => {setData(res)});
        }

    return (
        <div className="marketplace">
                <TextField fullWidth onChange={e => setSearch(e.target.value)} label="Search for specific product" id="search" />
                <div className='products'>
                {data
                .filter(toy => toy.title.toLowerCase().includes(search.toLowerCase()))
                .map((toy, index) => {
                    return(
                    <div id='product' key={index} >
                    <p>{toy.title}</p>
                    <img src={toy.url}></img>
                    <p>$Toy price</p>
                    <Link to={`/marketplace/${toy._id}`}>+</Link>
                    </div>
                    )
                })}
                </div>
        </div>
    )

}

export default MarketPlace;