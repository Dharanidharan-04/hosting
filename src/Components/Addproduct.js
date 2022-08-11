import React from 'react'
import { useFormik } from 'formik';
const formstyle={
        maxWidth: '400px',
        margin:'auto',
        padding: '40px',
        border: '2px solid black',
        color:'black',
        borderRadius: '15px',
        marginTop: '20px',
        backgroundColor:'lightgrey'
}
const inputstyle={
       width:'100%',
       border:'none',
       outline: 'none',
       fontSize:'20px',
       margin:'0.5rem 0'
       
}
const btnstyle={
  display:'block',
  backgroundColor:'green',
  outline:'none',
  border:'none',
  fontSize:'1rem',
  padding:'1rem 3rem',
  cursor:'pointer',
  width:'100%',
  color:'white'
}
function Addproduct() {
  
  const formik= useFormik({
    initialValues:{
        pname : '',
        price:'',
       
    },
    onSubmit :values =>{
      alert(`HELLO ${values.pname} Price ${values.price}`)
    }
})

  return (
    <div>
     
      <form onSubmit={formik.handleSubmit} style={formstyle}>
      <h1 style={{color:'green',textAlign:'center'}}>ADD A PRODUCT</h1>
        
        <input type='text' placeholder='Enter a Food name ..' style={inputstyle} name='pname'  onChange={formik.handleChange} values={formik.values.pname}  onBlur ={formik.handleBlur}/>
         {
          console.log(formik.values.pname)
         }<br /><br />
         
         <input type='text' placeholder='Enter Price ..' name='price' style={inputstyle}  onChange={formik.handleChange} values={formik.values.price}  onBlur ={formik.handleBlur}/>
         <br /><br />
         <input type='file' accept='image/png, image/jpg' name='pimage' /><br /><br />
         <input type='submit' value="ADD PRODUCT" style={btnstyle}></input>
         </form> 
    </div>
  )
}

export default Addproduct