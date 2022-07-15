import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Category = () => {
  let params = useParams();
  const [cats, setCat] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${params.theme}`)
      .then((res) => {
        console.log('conn_api')
        return res.json()
      })
      .then((res) => {
        setCat(res)
        console.log(res);
      })
  }, [])

  return (
    <div className='categories'>
      <Box sx={{ flexGrow: 1 }}>
        {cats.map((roses, index) => {
          return (
      <div key={index}>
      <h2>Category:<h1 className="item">
        {roses.title}
        {roses.author}
        {roses.date}
      </h1>
        <p >{roses.body}</p>
        <h3>User number:{roses.theme}</h3>
      </h2>
    </div>
          )
        })}
      </Box>
      
    </div>
    // <div>
    //   <h2>Category:<h1>
    //     {cats.title}
    //   </h1>
    //     <p >{cats.body}</p>
         
    //     <h3>Cats number:{cats.id}</h3>
        
    //   </h2>
     
    
    // </div>
  );

}
export default Category;