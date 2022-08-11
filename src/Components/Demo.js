import React from 'react';
 import { Formik } from 'formik';
 import  {useNavigate as UseNavigate} from 'react-router-dom'

  function Demo(){
    const navigate=UseNavigate();
  const handle=()=>{
    navigate("/register")
  }

 return (
  <div className='full'>
  <div className='background'>
  <div className='shape'></div>
  <div className='shape'></div>         
    </div>
     <Formik
       initialValues={{ username: '', password: '' }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.username) {
      //      errors.username = 'Required';
      //    } 
      //    return errors;
      //  }}

    


       onSubmit={(values) => {
        //  fetch("/datas",{method:"GET"}).then(data=>data.json()).then(dta=>console.log(dta))
        fetch("/login",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)}).then(res=>console.log(res.text()))
        
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         /* and other goodies */
       }) => (
       
       
         <form onSubmit={handleSubmit}>
             <div className='head'>
               <h3>Login</h3>
             </div>
             <label>Email</label>
             <div className='inp'>
           <input
             type="text"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
           />
           {/* {errors.username && touched.username && errors.username} */}
           <label>Password</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           </div>
           {/* {errors.password && touched.password && errors.password} */}
          
           <div className='btn'>
              <button onClick={handle}>Login</button>
           </div>
         </form>
       )}
     </Formik> 
     <div className='line'>
     <div style={{borderTop:"2px solid",width:"250px"}} ></div>
     <h3>or</h3>
     <div style={{borderTop:"2px solid",width:"250px"}}></div>
     </div>
     <div className='other_link'>
     <h5>Google</h5>
     <h5>Github</h5>
     <h5>Facebook</h5>
     </div>
    </div>
 );}
 
 export default Demo;





//  fetch('/store',{method:"POST",
//          body:JSON.stringify(values)}
//          ).then(res=>console.log(res))


// onSubmit={(values) => {
//     formData.append("name", values.name);
//     formData.append("phoneNo", values.phoneNo);
//     formData.append("email", values.email);
//     formData.append("address", values.address);




//ERCA2A014