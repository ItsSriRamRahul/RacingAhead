import React, { useEffect, useState } from 'react'

import AdminPage from './AdminPage'
import Home from './Home'
import { doSignOutWithEmail } from './Auth'
import axios from 'axios'
const url ='https://us-central1-racing-ahead.cloudfunctions.net/api'
function AuthHandler({user}) {

    const [Data,setData]=useState()
    const [loading, setLoading] = useState(true)
    async function getDetails(){
        const body={
          email:user.email
        }
       const res =await axios.patch(`${url}/api/roles`,body)
        setData(res.data)
        setLoading(false)
      }
        useEffect(()=>{
          getDetails()
          
        },[])
        if(loading)
            return <h1>Loading.....</h1>
        else{
            if (Data.role =='mod')
            return <AdminPage/>
            else return <Home user={Data}/>

        }
       
        

 
}

export default AuthHandler