import * as React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';

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
        .map((post) => {
          return (
            <div key={post._id}>
              <p>{post.author[0]}</p>
              <p>{post.title}</p>
              <p>{post.date[0]}</p>
              <Link to={`/forum/${post._id}`}>Show more</Link>
            </div>
          )
        })}
    </div>
  )
}