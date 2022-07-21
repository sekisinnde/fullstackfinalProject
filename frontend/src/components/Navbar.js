import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import img from '../logo512.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='menu'>
        <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 , color:"white"}}
          >
            <MenuIcon />
          </IconButton>
          <Button component={Link} to='/marketplace' sx={{color:"white"}}>MarketPlace</Button>
          <Button component={Link} to='/forum' sx={{color:"white"}}>Forum</Button>
        </div>
        <div>
          <img className='logo' component={Link} to='/' alt='logo' src={img} style={{height:"8vh"}}/>
        </div>  
        <div>
        <IconButton component={Link} to='/shoppingcart' aria-label="add to shopping cart" sx={{color:"White"}}>
          <AddShoppingCartIcon />
            </IconButton>
          <Button component={Link} to='/connexion' variant="outlined"   sx={{color:"white", mr:"2vh"}}>Connexion</Button>
        </div>  
              
    </div>
  );
}

export default Navbar;