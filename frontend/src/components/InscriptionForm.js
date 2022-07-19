import React, {useState} from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function InscriptionForm() {
  
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword)
  }

  return(
    <div className="form">
      <h1 className='signup'>Sign Up</h1>
      <TextField
          id="email"
          label="Email"
          type=""
          autoComplete="current-email"
          sx={{mb: "2vh", width: "100%"}}
          onChange={handleInputChange}
        />
        <TextField
          id="firstName"
          label="First Name"
          type=""
          autoComplete="current-firstName"
          sx={{mb: "2vh",mr: "3vh", width: "45%"}}
          onChange={handleInputChange}
        />
        <TextField
          id="lastName"
          label="Last Name"
          type=""
          autoComplete="current-lastName"
          sx={{mb: "2vh", ml:"2vh", width: "45%"}}
          onChange={handleInputChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{mb: "2vh", width:"100%"}}
          onChange={handleInputChange}
        />
        <TextField
          id="adress"
          label="Adress"
          type=""
          autoComplete="current-adress"
          sx={{mb: "2vh", width:"100%"}}
          onChange={handleInputChange}
        />
        <Button 
        onClick={handleSubmit}
        variant="contained"
        sx={{alignItems: "center", mb:"10vh"}}
        >Register</Button>
    </div>
  )
}

export default InscriptionForm;