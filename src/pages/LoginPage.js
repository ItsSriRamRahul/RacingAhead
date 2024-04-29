import React from 'react'
import './LoginPage.css'
import { useState } from 'react'
function LoginPage() {
  const [Email,setEmail]=useState('')
  const[Pass,setPass]=useState('')
  const Emailhandler =(event) => {
    setEmail(event.target.value)
  }
  const Passhandler =(event) => {
    setPass(event.target.value)
  }
  return (
    <div className="login-page">
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

         <div className='pass-bar'>
           <input 
          type='text'
          className="text-input"
          value={Pass}
          onChange={Passhandler}
          placeholder='Password'
          
          />

         </div>
         <div >
          <button className='login-btn'>Login</button>
        </div>

          </div>

        

        </div>
        <div className="img-box">
          <div className='image-container'>

          <img src='https://images.pexels.com/photos/159515/football-american-football-runner-player-159515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-f'/>
          </div>
        </div>

    </div>
  )
}

export default LoginPage