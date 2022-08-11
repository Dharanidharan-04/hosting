import React from 'react'
import {GoogleLogin} from 'react-google-login';
const clientId='';
function Google() {
    const onSuccess =(res) =>{
        console.log('SUCESS',res.profileObj);
    };
    const onFailure =(res)=>{
        console.log('FAILURE' ,res);
    };


  return (
    <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
    </div>
  )
}

export default Google