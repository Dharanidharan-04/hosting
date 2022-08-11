import React from 'react'
import { useNavigate } from 'react-router-dom'
function Example() {
    const navigate=useNavigate();
    const goabout =()=>{
        navigate('about')
    }
  return (
    <div>
      <button onClick={goabout}>CLICK</button>
    </div>
  )
}

export default Example