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
          <Link to='/marketplace'><Button color="inherit">MarketPlace</Button></Link>
          <Link to='/categories'><Button color="inherit">Forum</Button></Link>  
          <Link to='/'><img src={img} style={{height:"8vh", marginLeft: '50vh'}}/></Link>
          <Link to='/connexion'><Button variant="outlined" color="warning" sx={{ml: '82vh'}}>Connexion</Button></Link>       
    </div>
  );
}

export default Navbar;