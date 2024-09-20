import React from 'react';
import Skills from './skills';
import Projects from './Projects';
import Edtech from './Edtech';
import Restapi from './Restapi';
import Anime from './Anime';
import Experience from './Experience';
import Footer from './Footer';
import Navbar from './navbar';
import Contact from './Contact';
import Networking from './Networking';
import Gnews from './News';



const Home = () => {
  return (
    <div>

<div className=''>
<Navbar />
      <Skills/>

   <Projects />
   <Restapi />
   <Anime />
   <Gnews />
   
  
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
