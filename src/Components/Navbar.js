import React from "react";
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import './demo.css'
export default function Navbar() {
  return (
    <>
   <nav className="main-nav">
     <div className="logo">
       <h2>LOGO</h2>
     </div>

     <div className="menu-link">
       <ul>
         
           <Link to="">Home</Link>
         
           <Link to="">About Us</Link>
         
           <Link to="">Contact Us</Link>
        
           <Link to="">SignIn</Link>
        
       </ul>

     </div>

   </nav>
   </>
  );
}
