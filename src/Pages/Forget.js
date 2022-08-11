import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'

const validate = values =>{
    let errors={};
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
    return errors;
}

function Forget() {
    const navigate=useNavigate();
    const formik= useFormik({
        initialValues:{
            
            email : '',
            pass :'',
            conpass:'',

        },
      validate ,
      onSubmit :() =>{
        navigate('adminlogin')
      }
    });

  return (
    <div className='signup'>
        <h1>CHANGE PASSWORD</h1>
        <form onSubmit={formik.handleSubmit}>
      <input type="text" placeholder='Email ..' name='email' autoComplete='off'  onChange={formik.handleChange} value={formik.values.email}  onBlur ={formik.handleBlur} />
            {
               formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>:null
            }
        <input type="password" placeholder='Password ..' name='pass' onChange={formik.handleChange} value={formik.values.pass}  onBlur ={formik.handleBlur}/>
            {
              formik.touched.pass &&   formik.errors.pass ? <span>{formik.errors.pass}</span>:null
            }           
            <input type="password" placeholder='Confirm Password ..' name='conpass' onChange={formik.handleChange}  value={formik.values.conpass}  onBlur ={formik.handleBlur}/>
            {
                formik.touched.conpass && formik.errors.conpass ? <span>{formik.errors.conpass}</span>:null
            }
         <input type='submit' value='Submit ' />
         </form>
    </div>
  )
}

export default Forget