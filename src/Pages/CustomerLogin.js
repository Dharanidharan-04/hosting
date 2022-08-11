import React from 'react'
import { useFormik } from 'formik';
const validate = values =>{
    let errors={};
    if(!values.mobile){
        errors.mobile="Required";
    }   
    else if(values.mobile.length !==10)
    {
        errors.mobile="MobileNo must be 10 digit";
    }
    return errors;


}
function CustomerLogin() {
    const formik= useFormik({
        initialValues:{
            mobile : ''
        },
        validate,
        onSubmit :values =>{
            alert(` Hello! ,${values.mobile} Successfully signed up Successfully`);  
         }
        });
  return (
    <div className='custlog'>
        <h1>GUEST</h1>
        <form onSubmit={formik.handleSubmit}>
      
        <input type="text" placeholder='Mobile No ..' name='mobile'autoComplete='off' onChange={formik.handleChange} values={formik.values.mobile}  onBlur ={formik.handleBlur}/>
           {
               formik.touched.mobile &&  formik.errors.mobile ? <span>{formik.errors.mobile}</span>:null
            }
          <input type='submit' value='LOGIN'/>
          </form>
    </div>
  )
}

export default CustomerLogin