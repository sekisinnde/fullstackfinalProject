import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const ConnexionForm = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newUser = { ...form };

    await fetch("http://localhost:5000/users/verify", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => console.log(res.data))
      .catch(error => window.alert(error))
      .then(setForm({
        email: "",
        password: ""
      }))
      navigate("/forum")
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
          onChange={(e) => updateForm({ email: e.target.value })}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{mb: "3vh", width: "78%", backgroundColor: "white"}}
          onChange={(e) => updateForm({ password: e.target.value })}
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