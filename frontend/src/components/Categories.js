import React,{ useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { spacing } from '@mui/system';
import { Button } from '@mui/material';
import { Routes, Route,Link, useParams } from 'react-router-dom';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Categories =()=>{
    let params = useParams()
    const [categories, setCategory] = useState([])
  
    useEffect(() => {
        fetch(`http://localhost:5000/categories/${params._id}`)
          .then((res) => {
            console.log('category')
            return res.json()
          })
          .then((res) => {
            setCategory(res)
            console.log('category a jour');
          })
      }, [])


    return(

         <div className='categories'>
        <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
          <Item><Button  color="secondary">Category1</Button></Item>
          </Grid>
          <Grid item xs={6} md={4}>
          <Item><Button  color="secondary">Category2</Button></Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item><Button color="secondary">Category3</Button></Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item><Button  color="secondary">Category4</Button></Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item><Button  color="secondary">Category5</Button></Item>
          </Grid>
        
        </Grid>
        {categories.map((category, index) => {
        return (
         <>
          <Link to={`categories/${category.id}`}>
            <h1 key={index}>
              {category.title}
           </h1>
           </Link>
            <p key={index}>{category.body}</p>
            Afficher detaile
        
            </>
        )
      })}
      </Box>

    
      </div>
    //   <div className='cat'>
    //     <div className='cat1'>Category1</div>
    //     <div className='cat1'>Category2</div>
    //     <div className='cat1'>Category3</div>
    //     <div className='cat1'>Category4</div>
    //     <div className='cat1'>Category5</div> 
    //   </div>
    )

}
export default Categories;