import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
    const style1 = {backgroundColor: "grey"}
    const style2 = {display: "flex"}
    const style3 = {justifyContent: "right"}
    
    return (
            <div style={{...style1, ...style2,...style3}}>
            <IconButton color="secondary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <Button color="secondary" variant="contained" component="label">
                Connexion
            </Button>
            </div>
    )
}

export default Navbar;