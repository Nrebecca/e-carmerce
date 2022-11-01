import React from 'react';
import "./Styles/navbar.css";
// import { useState } from "react";

const Navbar = ({size}) => {
   
  return (
    <nav>
        <div className="nav-box">
<span className='qlty-rooms'>
    Quality Rooms
</span>
<div className='cart'>
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