
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from './Aboutme';
import Home from './Home';


function App() {
  

  return (
    <>
   <BrowserRouter >
 
   <Routes>

   <Route path='/' element = {<Home/>} />   
    <Route path='/home' element = {<Home/>} />
    <Route path='/aboutme' element = {<Aboutme />} />
   

   </Routes>
    


   </BrowserRouter>

 
  
 
    </>
  )
}

export default App


