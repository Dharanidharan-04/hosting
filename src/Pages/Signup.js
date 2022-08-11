import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import{Routes,Route} from 'react-router-dom';
import Login from './Login';

const signup={
    maxWidth: '400px',
    margin:'auto',
    padding: '40px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '15px',
    marginTop: '100px'
    
}
const textstyle={
    width: '100%',
    backgroundColor: 'black',
    color:'white',
    outline: 'none',
   padding: '15px 7px',
   border:'none',
   borderBottom: '1px solid',
     margin:'5px'
  
}
const buttonstyle={
    width:'100%',
    padding: '10px 0',
    backgroundColor: 'blue',
    marginTop:'30px',
    border:'none',
    outline:'none',
    cursor:'pointer',
    fontSize: '15px',
    color:'white',
    opacity: '0.3'
}


const validate = values =>{
    let errors={};
    if(!values.upi){
        errors.upi="Required";
    }


    if(!values.address){
        errors.address="Required";
    }
    if(!values.hname){
        errors.hname="Required";
    }
    else if(values.hname.length<=3){
        errors.hname="Must be 3 characters or more";
       
    }
    if(!values.name){
        errors.name="Required";
    }
    else if(values.name.length<=5){
        errors.name="Must be 6 characters or more";
       
    }

    if(!values.email){
        errors.email="Required";
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email="Invalid Email";
    }
    if(!values.pass){
        errors.pass="Required";
    }
    else if(values.pass.length<3)
    {
        errors.pass="Minimum 4 Characters";
    }
    else if(values.pass.length>9)
    {
        errors.pass="Maximum 8 Characters";
    }
    if(!values.conpass){
        errors.conpass="Required";
    }   
    else if(values.conpass !== values.pass)
    {
        errors.conpass="Password must match";
    }
    if(!values.mobile){
        errors.mobile="Required";
    }   
    else if(values.mobile.length !==10)
    {
        errors.mobile="MobileNo must be 10 digit";
    }
    return errors;
   //
}

const Signup =() => {
    
    



     const navigate=useNavigate();
    const formik= useFormik({
        initialValues:{
            upi:'',
            address:'',
            hname:'',
            name : '',
            email : '',
            pass :'',
            conpass:'',
            mobile:'',

        },
      validate, 
      onSubmit :values =>{
         alert(` Hello! ,${values.name} Successfully signed up Successfully`); 
         fetch('/store',{method:"POST",
         body:JSON.stringify(values)}
         ).then(res=>console.log(res))
         navigate('adminlogin')
       
      }
  });
   // console.log('err:'+formik.errors);
   // console.log(formik.errors.name);
   // console.log(formik.values);
  return (
      <>
     
    <div  style={signup}>
    
        <form onSubmit={formik.handleSubmit}>
        <h1 style={{color:'green',textAlign:'center'}}> SIGN UP</h1>
        <input type="text" style={textstyle} placeholder='Hotel Name ..' name='hname'   autoComplete='off' onChange={formik.handleChange} value={formik.values.hname} onBlur ={formik.handleBlur}/>
            {
               formik.touched.hname &&  formik.errors.hname ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.hname}</span>:null
            }

            <input type="text" style={textstyle} placeholder='Name ..' name='name'   autoComplete='off' onChange={formik.handleChange} value={formik.values.name} onBlur ={formik.handleBlur}/>
            {
               formik.touched.name &&  formik.errors.name ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.name}</span>:null
            }
            
            <input type="text" style={textstyle} placeholder='Email ..' name='email' autoComplete='off'  onChange={formik.handleChange} value={formik.values.email}  onBlur ={formik.handleBlur} />
            {
               formik.touched.email && formik.errors.email ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.email}</span>:null
            }
            <input type="password" style={textstyle} placeholder='Password ..' name='pass' onChange={formik.handleChange} value={formik.values.pass}  onBlur ={formik.handleBlur}/>
            {
              formik.touched.pass &&   formik.errors.pass ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.pass}</span>:null
            }           
            <input type="password" style={textstyle} placeholder='Confirm Password ..' name='conpass' onChange={formik.handleChange}  value={formik.values.conpass}  onBlur ={formik.handleBlur}/>
            {
                formik.touched.conpass && formik.errors.conpass ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.conpass}</span>:null
            }
            <input type="text" style={textstyle} placeholder='Address ..' name='address'   autoComplete='off' onChange={formik.handleChange} value={formik.values.address} onBlur ={formik.handleBlur}/>
            {
               formik.touched.address &&  formik.errors.address ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.address}</span>:null
            }
             <input type="text" style={textstyle} placeholder='UPI id ..' name='upi'   autoComplete='off' onChange={formik.handleChange} value={formik.values.upi} onBlur ={formik.handleBlur}/>
            {
               formik.touched.upi &&  formik.errors.upi ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.upi}</span>:null
            }
           <input type="text" style={textstyle} placeholder='Mobile No ..' name='mobile'autoComplete='off' onChange={formik.handleChange} values={formik.values.mobile}  onBlur ={formik.handleBlur}/>
           {
               formik.touched.mobile &&  formik.errors.mobile ? <span style={{color:'red', fontSize:'15px'}}>{formik.errors.mobile}</span>:null
            }
            <br></br><br />
           <a href='/forget' style={{color:'blueviolet',textDecoration:'none'}}> Forget Password?</a>
            <input type='submit' value='Submit' style={buttonstyle}/>
            
        </form>
    </div> 
    </>
  )
}

export default Signup



