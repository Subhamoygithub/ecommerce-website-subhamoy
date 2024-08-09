import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import {addToCart} from "../ReduxToolkit/Cartslice"


const Navbar = () => {
  const {cart} = useSelector((state)=>state.allCart);
  const dispatch = useDispatch()
  
  return (
    <>
      <nav class="navbar navbar-light bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">𝓢𝓱𝓸𝓹'𝓱𝓮𝓻𝓮</a>
    <Link to="/">  <span>𝓐𝓵𝓵 𝓹𝓻𝓸𝓭𝓾𝓬𝓽𝓼</span>   </Link>
    <Link to="/cart">    
    <button type="button" class="btn btn-dark" data-mdb-ripple-init> 𝘾𝙖𝙧𝙩{cart.length}</button>  
    </Link>

  </div>
</nav>
    </>
  )
}

export default Navbar
