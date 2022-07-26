// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


// // function Copyright(props) {
// //     return (
// //       <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //         {'Copyright © '}
// //         <Link color="inherit" href="https://mui.com/">
// //           Your Website
// //         </Link>{' '}
// //         {new Date().getFullYear()}
// //         {'.'}
// //       </Typography>
// //     );
// //   }

// const theme = createTheme();


// const ShoppingCart=()=>{
//   const [form, setForm] = useState({
//     email:"",
//     password:"",
//     firstName:"",
//     lastName:"",
//     adress:"",
//     adressNumber:"",
//     isAdmin: Boolean
//   });
//   const navigate = useNavigate();
  
//   function updateForm(value) {
//     return setForm((prev) => {
//       return { ...prev, ...value };
//     });
//   }

//  // This function will handle the submission.
//  async function onSubmit(e) {
//   e.preventDefault();

//   // When a post request is sent to the create url, we'll add a new record to the database.
//   const newUser = { ...form };
//   console.log(newUser);

//   await fetch("http://localhost:5000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newUser),
//   })
//   .catch(error => {
//     window.alert(error);
//     return;
//   });

//   setForm({ email: "", password: "", firstName: "", lastName:"",adress:"",adressNumber:"",isAdmin:Boolean });
//   navigate("/");
// }

//     return(
//     <div>
//         <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate  sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   onChange={(e)=>updateForm({firstName: e.target.value})}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                   onChange={(e)=>updateForm({lastName: e.target.value})}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   onChange={(e)=>updateForm({email: e.target.value})}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="adressNumber"
//                   label="adressNumber"
//                   name="adressNumber"
//                   autoComplete="adressNumber"
//                   onChange={(e)=>updateForm({adressNumber: e.target.value})}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={9}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="adress"
//                   label="adress"
//                   type="adress"
//                   id="adress"
//                   autoComplete="adress"
//                   onChange={(e)=>updateForm({adress: e.target.value})}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="password"
//                   label="password"
//                   name="password"
//                   autoComplete="password"
//                   onChange={(e)=>updateForm({password: e.target.value})}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={onSubmit}
//             >
//              <Link href="/clientSpace" variant="body2">
//                   Sign Up
//              </Link>
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/signin" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
        
//     </div>
//     )
// }

// export default ShoppingCart;







import MenuItem from '@mui/material/MenuItem';
 import React, { useState } from "react";
 import { useNavigate } from "react-router";
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ShoppingCart=() =>{
    let [cart, setsCart] = useState({
        quantity:"",
        product:"",
        price:"",
      
      });
      const navigate = useNavigate();
  
    //   function updateCart(value) {
    //     return setsCart((prev) => {
    //       return { ...prev, ...value };
    //     });
    //   }


 // This function will handle the submission.
 async function updateCart(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newCart = { ...cart };
    console.log(newCart);
  
    await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setsCart({ quantity: "", product: "", price: "", });
    navigate("/");
  };
    


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Quantity</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={quantity}
          label="Quantity"
          onChange={(e)=>updateCart({quantity: e.target.value})} 
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>veuillez choisir</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>choisir</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={product}
          label="Product"
          onChange={(e)=>updateCart({product: e.target.value})} 
        >
          <MenuItem value="">
            <em>veuillez choisir</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={price}
          label="Price *"
          onChange={(e)=>updateCart({price: e.target.value})} 
        >
          <MenuItem value="">
            <em>veuillez choisir</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}

 export default ShoppingCart;




 // import React from 'react';

// const ShoppingCart = () => {
//     return (
//         <div className='cart'>
//             <div className='categories'>
//                 <p>Quantity</p>
//                 <p>Product</p>
//                 <p>Price</p>
//             </div>
//             <div className='something'>
//                 <p>2</p>
//                 <p>Furby</p>
//                 <p>200$</p>
//             </div>
//         </div>
//     )
// }

//export default ShoppingCart;