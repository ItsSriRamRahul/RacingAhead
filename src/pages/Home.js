import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { doSignOutWithEmail } from './Auth'
import axios from 'axios'
import SlideBar from './components/SlideBar'
const url ='https://us-central1-racing-ahead.cloudfunctions.net/api'
function Home({user}) {
  
  const signOut=()=>{
    doSignOutWithEmail()
  }
  const [Search,setSearch  ]=useState('')
  const Searchhandler =(event)=>{
    setSearch(event.target.value)
  }

  const[active,Setactive]=useState(false)

  const Active =()=>{
    Setactive(true)
  }
  return (
    <div className='h-full overflow-scroll bg-gray-300 flex'>
      <div className={`w-full flex fixed p-4 justify-between bg-slate-800 z-50   `}>
          <div className='py-1 text-white text-xl tracking-wider'>Racing Ahead</div>
           <div className='flex justify-center items-center bg-white px-3 rounded-lg'> {/*searchbar*/}
              <MagnifyingGlassIcon className=' h-6 text-gray-500 mx-2' />
                  <input  type='text'
                    className="outline-none w-44"
                    value={Search}
                    onChange={Searchhandler}
                    onClick={Active}
                    placeholder='Search'
                    
                    />
              </div>
      <button className=' p-3 bg-white rounded-xl tracking-wider' onClick={signOut}>Sign-Out</button>

      </div>
     
      <div className='relative flex flex-col top-24 h-full mx-auto p-3 bg-white rounded-xl w-4/5 right-0.5 overflow-scroll'> 
       
      <SlideBar props={{title:"cricket"}}/>
      <SlideBar props={{title:"chess"}}/>
      
      </div>
    </div>
  )
}

export default Home