import React, { useState } from 'react'

function SignUp() {
    const [val,setVal]=useState({
        email: '',
        name: '',
        phone: '',
        age: '',
        password: '',
        confirmPassword: ''
      })
    
    function SignUp(){
        console.log(val)
    }
    function write(event){
        const {name,value}=event.target;
        setVal({...val,[name]:value})
        
        
    }
    const { email, name, phone, age, password, confirmPassword } = val;
  return (
    <div className='h-full w-full flex items-center justify-center bg-slate-400'>
        
        <div className='w-1/4 h-2/3 bg-white rounded-md flex flex-col justify-around items-center'>


        <div className='text-xl border-b-2 border-gray-500 tracking-widest w-full flex items-center justify-center py-1'>Welcome😊</div>
        
        <input 
          type='text'
          className="text-input"
          name='email'
          value={email}
          placeholder='Email'
          onChange={write}
          />
          <input 
          type='text'
          className="text-input"
          name='name'
          value={name}
          placeholder='Name'
          onChange={write}
          />
          <input 
          type='text'
          className="text-input"
          name='phone'
          value={phone}
          placeholder='Phone.no.'
          onChange={write}

          />

<input 
          type='text'
          className="text-input"
          name='age'
          value={age}
          placeholder='Age'
          onChange={write}
          />
          <input 
          type='password'
          className="text-input"
          name='password'
          value={password}
          placeholder='Password'
          onChange={write}
          />
          <input 
          type='password'
          className="text-input"
          name='confirmPassword'
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={write}
          />
        <button className='bg-slate-700 text-xl px-10 py-3 text-white rounded-md tracking-wider' onClick={SignUp}>Sign Up</button>
        </div>

    </div>
  )
}

export default SignUp