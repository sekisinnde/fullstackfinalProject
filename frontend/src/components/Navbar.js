import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../logo512.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
            <MenuIcon />
          <IconButton/>
          <Button component={Link} to='/marketplace'color="inherit">MarketPlace</Button>
          <Button component={Link} to='/categories' color="inherit">Forum</Button>  
          <img component={Link} to='/' alt='logo' src={img} style={{height:"8vh", marginLeft: '50vh'}}/>
          <Button component={Link} to='/connexion' variant="outlined" color="inherit" sx={{ml: '82vh', color:"white"}}>Connexion</Button>    
    </div>
  );
}

export default Navbar;