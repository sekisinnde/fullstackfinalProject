import React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Forum() {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState(``);

    useEffect(() => {
      getData()
    }, [])

    const getData =  () => {
      fetch(`http://localhost:5000/conversations`)
      .then(res => res.json())
      .then(data => setPosts(data))
    }
    
  return (
    <div  className='forum'>
      <TextField fullWidth onChange={e => setSearch(e.target.value)} label="Search for specific topic" id="search"/>
      {posts
      .filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
      .map((post, index) => {
        return (
          <div className='posts' key={index}>
            <p>{post.title}</p>
            <p>{post.category}</p>
            <p>{post.messages[0].date.slice(0, 10)}</p>
            <Button component={Link} to={`/forum/${post._id}`}>Plus</Button>
          </div>
        )
      })}
    </div>
  )
}