import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const ConnexionForm = () => {

  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  }

  const handleSubmit = () => {
    console.log(email, password)
  }

  return (
    <div className="form">
      <h1  className='signup'>Sign In</h1>
      <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
          sx={{mb: "2vh", width: "78%", backgroundColor: "white"}}
          onChange = {(e) => handleInputChange(e)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{mb: "3vh", width: "78%", backgroundColor: "white"}}
          onChange = {(e) => handleInputChange(e)}
        />
        <Button 
        component={Link} 
        to='/inscription' 
        variant="contained"
        sx={{mb:"5vh", mr:"2vh", width:"35%", height:"7vh", backgroundColor: '#F25A96',"&:hover": {backgroundColor: "#54B1A7"}}}
        >Register</Button>
        <Button 
        variant="contained"
        sx={{mb:"5vh", ml:"2vh", width:"35%", backgroundColor: '#64AB65',"&:hover": {backgroundColor: "#54B1A7"}}}
        onClick={handleSubmit}
        >Connect</Button>
    </div>
  );
}

export default ConnexionForm;