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



const Home = () => {
  return (
    <div>

<div className=''>
<Navbar />
      <Skills/>

   <Projects />
   <Restapi />
   <Anime />
   
   <Edtech />
   <Networking />  
 
 
  
   <Experience />
   <Contact />

      </div>
      <Footer />


      
    </div>
  )
}

export default Home
