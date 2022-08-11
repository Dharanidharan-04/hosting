import React, { useState } from 'react'
import {Box,FormControlLabel,Switch} from '@mui/material'
import './Pricing.css'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import { padding } from '@mui/system'
function Pricing () {
     const[checked,setChecked]=useState(true)
    
  
    const switchHandler = (event) => {
      setChecked(!checked);
      console.log(checked)
    };
    
  // done()
  // {
  //    this.state.c=!this.state.c;
  // }
  return (
    
    <>

    <div className='price-heading'>Choose the plan with your customized packages</div>
    <hr ></hr>
    <br></br><br></br>
    <Box>
     SIX MONTH <FormControlLabel label='' onChange={switchHandler} control={<Switch />} />  ANNUAL
    </Box>
    <div className='row'>
      <div className='col-md-1'></div>
        <div className='col-md-3' style={{backgroundColor:"rgba(137, 43, 206, 0.151)"}}>
           <h1 className='price-head'>Brozone Plan</h1>
          {checked ? (
              <h1 className='price-amount'>349/- SIX MONTH</h1>
          ):(
            <h1 className='price-amount'>549/- SIX MONTH</h1>
          )}
           
           <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Business Logo and Name Display</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Contact Name and Designation</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Website URL</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Contact Details</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Social Media Links</p>
            </div>
            <br></br>
            <div style={{display:"flex"}}>
            <ImCross size={"20px"} color={"red"} style={{marginLeft:"20px"}}></ImCross>
            <p style={{marginLeft:"10px"}}>Payment Details</p>
            </div>
            <div style={{display:"flex"}}>
            <ImCross size={"20px"} color={"red"} style={{marginLeft:"20px"}}></ImCross>
            <p style={{marginLeft:"10px"}}>Location Details</p>
            </div>
            <div style={{display:"flex"}}>
            <ImCross size={"20px"} color={"red"} style={{marginLeft:"20px"}}></ImCross>
            <p style={{marginLeft:"10px"}}>  Product Display</p>
            </div>
        
          
        </div>
        <div className='col-md-1'></div>  
        <div className='col-md-3' style={{backgroundColor:"rgba(137, 43, 206, 0.151)"}}>
        <h1 className='price-head'>Silver Plan</h1>
        {checked ? (
              <h1 className='price-amount'>399/- SIX MONTH</h1>
          ):(
            <h1 className='price-amount'>649/- SIX MONTH</h1>
          )}
        <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Business Logo and Name Display</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Contact Name and Designation</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Website URL</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Contact Details</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Social Media Links</p>
            </div>
            <br></br>
            <div style={{display:"flex"}}>
            <ImCross size={"20px"} color={"red"} style={{marginLeft:"20px"}}></ImCross>
            <p style={{marginLeft:"10px"}}>Payment Details</p>
            </div>
            <div style={{display:"flex"}}>
            <ImCross size={"20px"} color={"red"} style={{marginLeft:"20px"}}></ImCross>
            <p style={{marginLeft:"10px"}}>Location Details</p>
            </div>
            <div style={{display:"flex"}}>
            <ImCross size={"20px"} color={"red"} style={{marginLeft:"20px"}}></ImCross>
            <p style={{marginLeft:"10px"}}>  Product Display</p>
            </div>
        </div>
        <div className='col-md-1'></div>  
        <div className='col-md-3' style={{backgroundColor:"rgba(137, 43, 206, 0.151)"}}>
        <h1 className='price-head'>Platinum Plan</h1>
        {checked ? (
              <h1 className='price-amount'>449/- SIX MONTH</h1>
          ):(
            <h1 className='price-amount'>749/- SIX MONTH</h1>
          )}
        <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Business Logo and Name Display</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Contact Name and Designation</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Website URL</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Contact Details</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Social Media Links</p>
            </div>
            
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p >Payment Details</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p>Location Details</p>
            </div>
            <div style={{display:"flex"}}>
            <TiTick size={"40px"} color={"green"} style={{marginLeft:"10px"}}></TiTick>
            <p className='price-p'>  Product Display</p>
            </div>

        </div>

    </div>
    </>
  )
}

export default Pricing