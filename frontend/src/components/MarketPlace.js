import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MarketPlace = () => {
    
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetchData();
    })

    const searchHandler = (e) => {
        let value = e.target.value;
        setSearch(value);
    }
    
    const filteredData = data.filter((elem) => {
        if(search === ''){
            return elem;
        }else if (search === elem.email){
            return elem;
        } 
        })

    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:5000/users");
            const json = await res.json();
            setData(json);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="marketplace">
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField fullWidth onChange={searchHandler} label="Search for specific product" id="search" />
                <div>{filteredData.map((toy, index) => {
                    return(<p key={index}>{toy.email}</p>)
                })
                }</div>
            </Box>
        </div>
    )

}

export default MarketPlace;