import React, {useState} from 'react';
import "../Components/Styles/cart.css";
import {useEffect} from 'react';

const Cart = ({cart, setCart}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((item)=>(
      ans+= item.amount * item.price
    ))
    setPrice(ans);
  }
const handleRemove = (id) =>{
  const arr = cart.filter((item)=>item.id !==id);
  setCart(arr);
  // handlePrice();
}

  useEffect(()=>{
    handlePrice();
  })

    return (
    <article>
      {
       cart?.map((item)=>(
        <div className='cart-box' key={item.id}>
          <div className='cart-img'>
            <img src={item.img}/>
            <p>{item.title}</p>

          </div>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <span>{item.title}</span>
            <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
          
        </div>
       ))
      }
      <div>
        <span>Totl price</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  )
}

export default Cart;