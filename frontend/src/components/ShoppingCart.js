

    import React from 'react'
    import { useEffect, useState } from "react";
    import { useParams } from 'react-router-dom';

    const ShoppingCart = () => {

    const itemsData = [
    {product: "Snowball Furby", qty: 2,price:30 +'$'},
    {product: "Bear", qty: 3,price:70 +'$'},
    {product: "Panda", qty: 1,price:90 +'$'},
    {product: "Bumble Bee", qty: 2,price:80 +'$'},
    {product: "Kiwi", qty: 5,price:50 +'$'},
    {product: "Bumble Bee", qty: 6,price:800 +'$'}
    ];

    let params = useParams();
    const [category, setCategory] = useState({})

    useEffect(() => {
    fetch(`http://localhost:5000/cart/${params.id}`)
        .then((res) => {return res.json()})
        .then((res) => {setCategory(res)})
    }, [])

    return(
    <div className='cart1'> 
    {itemsData.map((item, index) => {
    return(   
    <div className='cart2'>
    <p>{item.product}</p> <br/>
    <p>{item.qty}</p><br/>
    <p>{item.price}</p><br/>
    </div>
    )})
    }

    </div>
    )}
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