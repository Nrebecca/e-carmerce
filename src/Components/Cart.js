import React, {useState} from 'react';
import "../Components/Styles/cart.css";

const Cart = ({cart, setCart}) => {
  const [price, setPrice] = useState(0);
    return (
    <article>
      {
       cart.map((item)=>{
        
       })
      }
    </article>
  )
}

export default Cart;