import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../logo512.png';
import {Link} from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">MarketPlace</Button>
          <Button color="inherit">Forum</Button>  
          <Link to='/'><img src={img} style={{height:"8vh", marginLeft: '52vh'}}/></Link>
          <Link to='/connexion' style={{color:'white'}}><Button color="inherit" sx={{ml: '82vh'}}>Connexion</Button></Link>       
        </Toolbar>
        
      </AppBar>
      
    </Box>
  );
}

// import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import img from '../logo512.png';

// const Navbar = () => {
    
//     return (
//             <div  className="navbar">
//             <p>MarketPlace</p>
//             <p>Forum</p>
//             <img className="logo" src={img}/>
//             <p>Shopping Cart</p>
//             <Link to='/connexion'>Connexion</Link>
//             </div>
//     )
// }

// export default Navbar;