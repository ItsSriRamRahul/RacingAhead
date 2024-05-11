import React from 'react'
import './LoginPage.css'
import { useState } from 'react'
import { app ,auth} from './Config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { doSignInWithEmail,doCreateUserWithEmail,doSignOutWithEmail } from './Auth'
import im1 from './im.jpg'
import { Navigate } from 'react-router-dom';
function LoginPage({user}) {
  const [Email,setEmail]=useState('')
  const[Pass,setPass]=useState('')
  const [islog,setIsLog]=useState(false)


 





  const Emailhandler =(event) => {
    setEmail(event.target.value)
  }
  const Passhandler =(event) => {
    setPass(event.target.value)
  }

  const loginAction =(event) => {

    console.log(`${Email}===> ${Pass}`)
    doSignInWithEmail(Email,Pass).then((e)=>{
      setIsLog(true)
    }).catch((e)=>{
      console.log(e)
      setIsLog(false)
    })
  }
  if(user){
    return <Navigate to ="/Home"></Navigate>
  }
  
  return (
    <div className="flex h-full">
      {islog }
        <div className="login-box">
          <div className='login-container'>

          <div className='header'>Racing Ahead</div>
          <div className='footer'>Welcome😊</div>
          <div className='email-bar'>

            
          <input 
          type='text'
          className="text-input"
          value={Email}
          onChange={Emailhandler}
          placeholder='Email'
          
          />
</div>

         <div className='pass-bar px-3'>
           <input 
          type='password'
          className="text-input"
          value={Pass}
          onChange={Passhandler}
          placeholder='Password'
          
          />

         </div>
         <div className="row-1">
          <span>signup</span>
          <span>forgot password?</span>
         </div>
         <div >
          <button className='bg-slate-700 text-xl px-10 py-3 text-white rounded-md ' onClick={loginAction}>Login</button>
        </div>

          </div>

        

        </div>
        <div className="img-box">
          

          <img src={im1} className='img-f'/>
          <div className='txt-fill'>Game On</div>
        </div>

    </div>
  )
}

export default LoginPage