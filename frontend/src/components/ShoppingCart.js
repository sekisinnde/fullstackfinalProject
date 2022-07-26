

import React from 'react'
import { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

    const ShoppingCart = () => {

    const itemsData = [
    {product: "Snowball Furby", qty: 2,price:30 +'$'},
    {product: "Bear", qty: 3,price:70 +'$'},
    {product: "Panda", qty: 1,price:90 +'$'},
    {product: "Bumble Bee", qty: 2,price:80 +'$'},
    {product: "Kiwi", qty: 5,price:50 +'$'},
    {product: "Bumble Bee", qty: 6,price:800 +'$'}
    ];

    
    const [product ,setProduct] = useState(0);
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    const [value, setValue] =useState(0);

    function handleChange(event) {
        setProduct(event.target.value);
        setQty(event.target.value);
        setPrice(event.target.value);
    }

    useEffect(() => {
    fetch(`http://localhost:5000/cart/`)
        .then((res) => {return res.json()})
        .then((res) => {setProduct(res)})
    }, [])

    return(
    <div className='cart1'> 
    {itemsData.map((item, index) => {
    return(   
    <div className='cart2'>
    <p> {item.product}</p><br/>
    <p> {item.qty}</p><br />
    <p> {item.price}</p><br />
    </div>
    )})
    }
    </div>
    
    );


    // <ThemeProvider >
    //         <CssBaseline />
    //         Vous allez réserver ...
    //         <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    //             <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
    //                 <Select
    //                     labelId="demo-select-small"
    //                     id="demo-select-small"
    //                     value={product}
    //                     label="Product"
    //                     onChange={handleChange}>
    //                     <MenuItem value=""><em>None</em></MenuItem>
    //                     </Select>
                       
    //                     <Select
    //                     labelId="demo-select-small"
    //                     id="demo-select-small"
    //                     value={qty}
    //                     label="Quantity"
    //                     onChange={handleChange}>
    //                     <MenuItem value=""><em>None</em></MenuItem>
    //                     </Select>
                        
                        {/* <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={price}
                        label="Price"
                        onChange={handleChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        </Select> */}
                       
                       
                       
                        {/* {itemsData.map((participant) => {
                            
                            return ( */}
                        // <MenuItem value={participant.q}>{participant}</MenuItem>
                        // <MenuItem value={participant}>{participant}</MenuItem>
                        // <MenuItem value={participant}>{participant}</MenuItem>
                        // <MenuItem value={participant.product}>{participant.product}</MenuItem>
                        // )

                        // })}
                
                    {/* <div>
                        {tab.map((retourFrom) => {
                            return <AddressForm />
                        })}
                        <Button type="submit" variant="contained" color="primary" onSubmit={handleSubmit}>
                        Valider Reservation
                        </Button>
                    </div> */}
                    
                {/* </Paper>
            </Container>
         </ThemeProvider>
    ); */}

}

    export default ShoppingCart;








//  import React from 'react';

// const ShoppingCart = () => {

//     [cart, setCart] = useState({
//                 quantity:"",
//                 product:"",
//                 price:"",
              
//               });
   
   
//               return (
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

// export default ShoppingCart;