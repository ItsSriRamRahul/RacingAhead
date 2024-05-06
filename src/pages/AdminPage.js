import React from 'react'
import { doSignOutWithEmail } from './Auth'

function AdminPage() {
    const signOut =()=>{
        doSignOutWithEmail()
    }
  return (
    <div className='Admin'>AdminPage 
    <button className='btn' onClick={signOut}>Signout</button>
    </div>
  )
}

export default AdminPage