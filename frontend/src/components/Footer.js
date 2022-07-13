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

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <>blablabla</>
      </AppBar>     
    </Box>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import {Link} from 'react-router-dom';

// export default function Footer() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box sx={{mt: "20vh"}}>
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction label="Project Capstone"/>
//         <Link to="/aboutus"><BottomNavigationAction label="About Us"/></Link>
//         <BottomNavigationAction label="Made by Nicolas & Oumar"/>
//       </BottomNavigation>
//     </Box>
//   );
// }


// import React from 'react';
// import {Link} from 'react-router-dom';

// const Footer = () => {
//     return (
//         <div className='footer'>
//                 <spam>Project Capstone</spam>
//                 <spam><Link to="/aboutus">About Us</Link></spam>
//                 <spam>Created by Nicolas & Oumar</spam>
//         </div>
//     )
// }

// export default Footer;