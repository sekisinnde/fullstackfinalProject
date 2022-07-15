import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { spacing } from '@mui/system';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const dataCategories = ['Snowball Furby','Bear','Bumble Bee', 'Kiwi', 'Champagne']
const length = dataCategories.length

for (let i=0; i<length ;i++){
    console.log(dataCategories[i]);
}

const Categories = () => {
  let params = useParams()
  const [categories, setCategory] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/categories/furby/`)
      .then((res) => {
        console.log('category')
        return res.json()
      })
      .then((res) => {
        setCategory(res)
        console.log('category a jour');
      })
  }, [])


  return (

    <div className='categories'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          
            {dataCategories.map((category, index)=>{
              return(
                <Grid item xs={6} md={8}>
                  <Item key={index}><Button component={Link} to={`/categories/${category}`} color="secondary">{category}</Button></Item>   
                </Grid>
              )
            })}
        </Grid>
      </Box>
      </div>
      )
    }
    export default Categories;
        
          {/* <Grid item xs={6} md={4}>
            <Item><Button component={Link} to={`/categories/${dataCategories[1]}`} color="secondary">{dataCategories[1]}</Button></Item>
          </Grid> */}
          {/* <Grid item xs={6} md={4}>
            <Item><Button component={Link} to={`/categories/${dataCategories[2]}`} color="secondary">{dataCategories[2]}</Button></Item>
          </Grid> */}
          {/* <Grid item xs={6} md={8}>
            <Item><Button component={Link} to={`/categories/${dataCategories[3]}`} color="secondary">{dataCategories[3]}</Button></Item>
          </Grid> */}
          {/* <Grid item xs={6} md={8}>
            <Item><Button component={Link} to={`/categories/${dataCategories[4]}`} color="secondary">{dataCategories[4]}</Button></Item>
          </Grid> */}
        {/* </Grid>
        {categories.map((category, index) => {
        return (
         <>
          <Link to={`category/${category[0]}`}>


            <h1 key={index} className="item">
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
  ) */}