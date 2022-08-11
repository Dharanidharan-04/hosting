import React ,{useState} from 'react'
import './Design.css'
import { Link } from 'react-router-dom';
function Design() {
     
  return (

      <>
    <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>      
    </div>
    <form>
      <div className='head'>
        <h3>Login</h3>
        </div>
       <label> Email</label>
       <div className='inp'>
        <input type="text" placeholder='Email' name="email"></input>
        <label>Password</label>
        <input type="password" placeholder='Password' name="pass"></input>
       
        </div>
        <div className='forget'>
        <Link to='/forget'>Forget Password </Link>
        </div>
        <div className='btn'>
        <button>LogIn</button>
        </div>
      
    </form>
    </>
  )
}


export default Design