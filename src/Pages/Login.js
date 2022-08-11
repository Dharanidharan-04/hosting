import React from 'react'
import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom'
const signup={
    maxWidth: '400px',
   
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
    if(!values.email){
        errors.email="Required";
    }
   
    if(!values.pass){
        errors.pass="Required";
    }
    
    return errors;
}

function Login() {
      const navigate=useNavigate()
    const formik= useFormik({
        initialValues:{
            email : '',
            pass :'',
            

        },
       
      validate,
      
      onSubmit:(values)=>{
        var data = {
            "email": values.email,
            
         }
        //  console.log("asf",values)
        fetch('http://localhost:4000/store-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }).then(res=>console.log(res))
         // navigate('addproduct')
         values.preventDefault();
      }
     
  });
   // console.log('err:'+formik.errors);
   // console.log(formik.errors.name);
    //  console.log(formik.values);
  return (
    <div style={signup}>
        <h1>Sign In</h1>
        <form onSubmit={formik.handleSubmit}>

            <input type="text"  style={textstyle} placeholder='Email ..' name='email' autoComplete='off'  onChange={formik.handleChange} value={formik.values.email}  onBlur ={formik.handleBlur} />
            {
               formik.touched.email && formik.errors.email ? <span style={{color:'red'}}>{formik.errors.email}</span>:null
            }
            <input type="password"  style={textstyle} placeholder='Password ..' name='pass' onChange={formik.handleChange} value={formik.values.pass}  onBlur ={formik.handleBlur}/>
            {
              formik.touched.pass &&   formik.errors.pass ? <span style={{color:'red'}}>{formik.errors.pass}</span>:null
            } 
            <input type='submit'  value='Submit ' style={buttonstyle}/>
            
        </form>
    </div> 
  )
}
    

export default Login