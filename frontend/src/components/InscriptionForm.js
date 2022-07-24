import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const InscriptionForm = () => {

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    adress: ""
  })

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newUser = { ...form };

    await fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .catch(error => window.alert(error))
      .then(setForm({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        adress: ""
      }))
  }

  return (
    <div className="form">
      <h1 className='signup'>Sign Up</h1>
      <TextField
        id="email"
        label="Email"
        type=""
        autoComplete="current-email"
        sx={{ mb: "2vh", width: "100%" }}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      <TextField
        id="firstName"
        label="First Name"
        type=""
        autoComplete="current-firstName"
        sx={{ mb: "2vh", mr: "3vh", width: "45%" }}
        onChange={(e) => updateForm({ firstName: e.target.value })}
      />
      <TextField
        id="lastName"
        label="Last Name"
        type=""
        autoComplete="current-lastName"
        sx={{ mb: "2vh", ml: "2vh", width: "45%" }}
        onChange={(e) => updateForm({ lastName: e.target.value })}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        sx={{ mb: "2vh", width: "100%" }}
        onChange={(e) => updateForm({ password: e.target.value })}
      />
      <TextField
        id="adress"
        label="Adress"
        type=""
        autoComplete="current-adress"
        sx={{ mb: "2vh", width: "100%" }}
        onChange={(e) => updateForm({ adress: e.target.value })}
      />
      <Button
        variant="contained"
        sx={{ height: "7vh", mb: "10vh", backgroundColor: "#A891C1", "&:hover": { backgroundColor: "#54B1A7" } }}
        onClick={handleSubmit}
      >Register</Button>
    </div>
  )
}

export default InscriptionForm;