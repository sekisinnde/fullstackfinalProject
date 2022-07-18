import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { spacing } from '@mui/system';
import { Button } from '@mui/material';
import { Link} from 'react-router-dom';
import furbyGIF from '../images/2.webp'
import furby1 from '../images/3.webp';
import furby2 from '../images/4.webp';
import furby3 from '../images/5.jpeg';
import furby4 from '../images/6.jpeg';
import furby5 from '../images/7.webp';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const dataCategories = [
  {
      id: 1,
      category: "Snowball Furby",
      image: <img src={furbyGIF }  />,
      author: "Mr Test",
      Date: "13/09/22",
      title: "something",
      converstionId: "3568191026",
    
    }
  ,
  {
    id: 2,
    title: "Bear",
    author: "Nico",
    date: '16/07/1995',
    image: <img src={furby2 }  />
  },
  {
    id: 3,
    title: "Panda",
    author: "kamel",
    date: '16/07/1998',
    image: <img src={furby5 }  />

  },
  
  {
    id: 4,
    title: "Bumble Bee",
    author: "Sylvain",
    date: '16/07/1980',
    image: <img src={furby5 }  />

  },
  {
    id: 5,
    title: "Kiwi",
    author: "Dorian",
    date: '16/07/1995',
    image: <img src={furbyGIF }  />
  },
  {
    id: 6,
    title: "Champagne",
    author: "Coroff",
    date: '16/07/1996',
    image: <img src={furby1  }  />
  }
]
const length = dataCategories.length

for (let i = 0; i < length; i++) {
  console.log(dataCategories[i]);
}

const Forum = () => {

  const [categories, setCategory] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/categories/`)
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
      <Box sx={{ flexGrow: 4 }}>
        <Grid sx={{
          display: 'flex',
          flexdirection: 'row',
          justifyContent: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 15,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}>

          {dataCategories.map((category, index) => {
            return (
              <Grid item xs={6} md={8} >
                 <Item key={index}><Button component={Link} to={`/category/${category.id}`} color="secondary">{category.id} </Button></Item>
              
                {/* <Link to={`category/${category.id}`}><h1 key={index} className="item">{category.title}</h1></Link> */}
                    
                <p className='image' >{category.image}</p>
                <p>{category.body}</p>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </div>
  )
}
export default Forum;

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