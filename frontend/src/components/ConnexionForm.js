import React from 'react';
import {Link} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const ConnexionForm = () => {

  return (
    <div className="form">
      <h1 className='signup'>Sign In</h1>
      <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
          sx={{mb: "2vh", width: "78%"}}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{mb: "2vh", width: "78%"}}
        />

        <Button 
        component={Link} 
        to='/inscription' 
        variant="contained"
        sx={{mb:"10vh", mr:"2vh", width:"35%", height:"7vh"}}
        >Register</Button>


        <Button 
        variant="contained"
        sx={{mb:"10vh", ml:"2vh", width:"35%"}}
        >Connect</Button>
    </div>
  );
}

export default ConnexionForm;