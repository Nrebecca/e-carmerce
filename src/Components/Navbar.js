import React from 'react';
import "./Styles/navbar.css";
// import { useState } from "react";

const Navbar = ({size, setShow})  => {
   
  return (
    <nav>
        <div className="nav-box">
<span className='qlty-rooms' onClick={()=>setShow(true)}>
    Quality Rooms
</span>   
<span className='add-new'>
  Add New Product
</span>
<div className='cart' onClick={()=>setShow(false)}>
<span>
  <i className='fas fa-cart-plus'></i>
</span>
<span>{size}</span>

</div>

        </div>
    </nav>
  )
}

export default Navbar;