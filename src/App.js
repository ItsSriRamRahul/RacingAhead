
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import { useContext, useEffect, useState } from "react"
import { initializeAuth, onAuthStateChanged } from "firebase/auth"
import { auth } from './pages/Config';
import {ProtectedRoute} from './pages/ProtectedRoute';
function App() {
 
 const[user,setUser]=useState()
 const [load,isLoading]=useState(true)
 useEffect(()=>{

const sub = onAuthStateChanged(auth,(user)=>{
  if(user){
    setUser(user)
    isLoading(false)
    return;
  }
  setUser(null)
  isLoading(false)
})
return ()=>sub()

 },[])
 if (load){
 <div className='center'> <h1>Loading...</h1></div>
 }
 else
  return (
<div className='App'>
   <BrowserRouter>
   <Routes>

   <Route path="/Login" element={<LoginPage user={user}/>}></Route>
   <Route path="/Home" element={
   <ProtectedRoute user={user} >
    <Home />
   </ProtectedRoute>
   }></Route>

   </Routes>

   
   </BrowserRouter>
   </div>
  );
}

export default App;
