import { useEffect, useState } from "react";
import { Routes, Route,Link, useParams } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
       <div className='pagination'>
      <Stack spacing={2}>
        <Pagination
          count={5}
          renderItem={(item) => (
            <PaginationItem
              Item={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
      </div>
    
    </div>
  );

}
export default Users;