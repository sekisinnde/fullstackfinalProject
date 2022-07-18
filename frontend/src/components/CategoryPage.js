import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';


const CategoryPage = () => {

  const categeryItems = [
    {
      id: 1,
      title: "Snowball Furby",
      url: "",
      subject: "something",
      author: "Mr Test",
      Date: "13/09/22",
      converstionId: "3568191026"
  }
    ,
    {
      id: 2,
      title: "Bear",
      author: "Nico",
      date: '16/07/1995',
    },

    {
      id: 3,
      title: "Panda",
      author: "Kamel",
      date: '16/07/1999',
    },
    {
      id: 4,
      title: "Bumble Bee",
      author: "Sylvain",
      date: '16/07/1980',
    },
    {
      id: 5,
      title: "Kiwi",
      author: "Dorian",
      date: '16/07/1995',
    },
    {
      id: 6,
      title: "Champagne",
      author: "Coroff",
      date: '16/07/1996',
    }
  ];

  let params = useParams();
  const [category, setCategory] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${params.id}`)
      .then((res) => {
        console.log('conn_api')
        return res.json()
      })
      .then((res) => {
        setCategory(res)
        console.log(res);
      })
  }, [])


  return (
    <div className='categories'>
      <Box sx={{
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
       {categeryItems.map((item , index) => {
          return (
            <div key={index} >
              <h3>Furby Generation:{item.id}</h3>
              <p>{item.title}</p>
              <p>{item.author}</p>
             Afficher detaile <p>{item.date}</p>
               
              
            </div>
          );  

        })}  
        {/* <div>
          <h1><h3>Furby Generation:{category.id}</h3></h1>
          {category.title}
          {category.author}
          {category.date}
        <p >{category.body}</p>
        </div> */}





        {/* {roses.map((rose, index) => {
          return (
      <div key={index}>
      <h2>Category:<h1 className="item">
        {rose.title}
        {rose.author}
        {rose.date}
      </h1>
        <p >{rose.body}</p>
        <h3>User number:{rose.theme}</h3>
      </h2>
    </div>
          )
        })} */}
      </Box>
    </div>
   
  );

}
export default CategoryPage;