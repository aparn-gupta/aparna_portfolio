import React from 'react';
import Skills from './skills';
import Projects from './Projects';
import Edtech from './Edtech';
import WeatherApp from './WeatherApp';
import ChatBot from './ChatBot';
import Experience from './Experience';
import Footer from './Footer';
import Navbar from './navbar';
import Contact from './Contact';
import Networking from './Networking';
import Gnews from './News';
import Gadgets from './Gadgets';
import FaceApi from './FaceApi';


const Home = () => {
  return (
    <div>

<div className=''>
<Navbar />
      <Skills/>

   <Projects />
   <FaceApi />
   <Gadgets />
   <ChatBot />
   
 
   <Gnews />
   <WeatherApp />
   
  
   <Networking />  
   <Edtech />
  
 
 
  
   <Experience />
   <Contact />

      </div>
      <Footer />



      
    </div>
  )
}

export default Home
