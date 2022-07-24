import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

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
                        <Link to={`/marketplace/${toy._id}`}><IconButton sx={{color: "blue"}}><ControlPointIcon/></IconButton></Link>
                    </div>
                    )
                })}
                </div>
        </div>
    )

}

export default MarketPlace;