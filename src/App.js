// import React,{useEffect} from 'react';
// import './App.css';
// import axios from 'axios';
// import Navbar from './Components/Navbar';
// import Signup from './Pages/Signup';
// import{Routes,Route} from 'react-router-dom';
// import {Home} from './Components/Home';
// import {About} from './Components/About';
// import { Nomatch } from './Components/Nomatch';
// import {Product} from './Components/Product'


// import Demo from './Components/Demo';
// import Login from './Pages/Login';
// import CustomerLogin from './Pages/CustomerLogin';
// import Forget from './Pages/Forget';

// import Addproduct from './Components/Addproduct';
// import Example from './Components/Example';

  
 
// function App() {
    

//   return (
   
//     <>
//    <Example />
// {/*       
//       <Routes>
//       <Route path='/' element={<Example />}></Route>
//       <Route path='about' element={<About />}></Route>
//       <Route path='signup' element={<Demo />}></Route>
//       <Route path="*" element={<Nomatch />}></Route>
//       <Route path='signup/adminregister' element={<Signup />}></Route>
//       <Route path='signup/adminlogin' element={<Login />}></Route>
//       <Route path='forget/adminlogin' element={<Login />}></Route>
//       <Route path='signup/customerlogin' element={<CustomerLogin />}></Route>
//       <Route path='/product' element={<Product />}>    </Route>
//       <Route path="forget" element={<Forget />}></Route>
//       <Route path='signup/adminregister/adminlogin' element={<Login />}></Route>
//       <Route path='/signup/adminlogin/addproduct' element ={<Addproduct />}></Route>
//       <Route path='/about' element={<About />}></Route>
    
//       </Routes>
//      */}
//     </>
//   ); 
// } 
 
// export default App;
 
import React from 'react'
import { About } from './Components/About';
import Home1 from './Components/Home1';
import Pricing from './Pricing';


function App() {

  return (
    <>
    <Home1 />
    <About />
    <Pricing />
      
    </>
  ) 
}

export default App
