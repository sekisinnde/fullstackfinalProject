import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Category = () => {
  let params = useParams();
  const [cats, setCat] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/users/${params._id}`)
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
    <div>
      <h2>Category:<h1>
        {cats.title}
      </h1>
        <p >{cats.body}</p>
         
        <h3>Cats number:{cats.id}</h3>
        
      </h2>
    
    </div>
  );

}
export default Category;