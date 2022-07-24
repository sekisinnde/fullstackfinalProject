import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import img from '../pink-furby.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [display, setDisplay] = useState(false)

  const handleSubmit = () => {
    setDisplay(prevDisplay => !prevDisplay)
  }

  return (
    <div className='navbar'>
      <div className='menu'>
        <IconButton
          size="small"
          edge="start"
          aria-label="menu"
          sx={{ml: "2vh", mr:"1vh", color: "white", "&:hover": { color: "#5bb6ad" } }}
          onClick={handleSubmit}
        >
          <MenuIcon />
        </IconButton>
        {display && <Button component={Link} to='/marketplace' sx={{ color: "white", "&:hover": { color: "#5bb6ad"}}}>MarketPlace</Button>}
        {display && <Button component={Link} to='/forum' sx={{ color: "white", "&:hover": { color: "#5bb6ad" }}}>Forum</Button>}
      </div>
      <div>
        {!display && <Link to='/home'><img className='logo' alt='logo' src={img} style={{ height: "9vh", marginLeft: "20vh"}} /></Link>}
      </div>
      <div>
        <IconButton component={Link} to='/shoppingcart' aria-label="add to shopping cart" sx={{ color: "white", mr: "2vh", "&:hover": { color: "#5bb6ad" } }}>
          <AddShoppingCartIcon />
        </IconButton>
        <Button component={Link} to='/connexion' variant="outlined" sx={{ color: "white", mr: "2vh", "&:hover": { color: "#5bb6ad" } }}>Connexion</Button>
      </div>

    </div>
  );
}

export default Navbar;