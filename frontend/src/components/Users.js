import { useEffect, useState } from "react";
import { Routes, Route,Link, useParams } from 'react-router-dom';
const Users = () => {
  //let params = useParams();
  const [users, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users/')
      .then((res) => {
        console.log('conn_api')
        return res.json()
      })
      .then((res) => {
        setUser(res)
        console.log(res);
      })
  }, [])

  return (
    <div>
      {users.map((user, index) => {
        return (
         <>
          <h1 key={index}>
              {user.firstName}
           </h1>
          
            {/* <p key={index}>{category.body}</p>
            Afficher detaile */}
        
            </>
        )
      })}
    
    </div>
  );

}
export default Users;