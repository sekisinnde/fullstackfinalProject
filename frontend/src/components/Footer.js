import React from "react";
import { Link } from 'react-router-dom';
import Button from  '@mui/material/Button';

 const Footer = () => {
  return (
    <div className='footer'>
      <p style={{color: '#F280BA'}}>Project Captsone</p>
      <Button sx={{color:"white", "&:hover": {color: "#5bb6ad"}}} component={Link} to='/infopage'>About Us</Button>
      <p style={{color: '#F280BA'}}>Tremplin FullStack 2022</p>
    </div>
  );
}

export default Footer;