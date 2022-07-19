import * as React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

export default function Forum() {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState(``);
  
    useEffect(() => {
      fetch(`http://localhost:5000/conversations`)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          setPosts(res)
        })
    }, []);
    
  return (
    <div  className='forum'>
      <TextField fullWidth onChange={e => setSearch(e.target.value)} label="Search for specific topic" id="search"/>
      {posts
        .filter(post => post.info.title.toLowerCase().includes(search.toLowerCase()))
        .map((post, index) => {
          return (
            <div key={index} className='post'>
              <p>{post.info.title}</p>
              <p>{post.message.author[0]}</p>
              <p>{post.message.date[0]}</p>
            </div>
          )
        })}
    </div>
  )
}