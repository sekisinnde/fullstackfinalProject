import React from "react";
import { Link } from 'react-router-dom';
import Button from  '@mui/material/Button';

 const Footer = () => {
  return (
    <div className='footer'>
      <p>Project Captsone</p>
      <Button sx={{color:"white"}} component={Link} to='/infopage'>About Us</Button>
      <p>Tremplin FullStack 2022</p>
    </div>
  );
}

export default Footer;