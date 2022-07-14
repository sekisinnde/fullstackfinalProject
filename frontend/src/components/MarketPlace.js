import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MarketPlace = () => {

    useEffect(() => {
        fetchData();
    })

    let [data, setData] = useState([]);
    let [userSearch, setSearch] = useState([]);
    
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
                <TextField fullWidth onChange={(e) => setSearch(e.target.value)} label="Search for specific product" id="search" />
                {data
                .filter(toy => {
                    if(userSearch === ''){
                        return toy;
                    }else if(toy.email.includes(userSearch)){
                        return toy;
                    }
                })
                .map((toy) => {
                    <p>{toy.email}</p>
                })
                }
            </Box>
        </div>
    )

}

export default MarketPlace;