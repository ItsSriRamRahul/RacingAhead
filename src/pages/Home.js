import React from 'react'
import './Home.css'
import { doSignOutWithEmail } from './Auth'
function Home() {
  const signOut=()=>{
    doSignOutWithEmail()
  }
  return (
    <div className='Home'>
      <div className='NavBar'>
      <div className='letter-box'>Racing Ahead</div>
      
      <button className='login-btn' onClick={signOut}>Signout</button>

      </div>
    </div>
  )
}

export default Home