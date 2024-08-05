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



const Home = () => {
  return (
    <div>

<div className=''>
<Navbar />
      <Skills/>
   <Projects />
   <Edtech />
  
   {/* <Anime />
   <Restapi /> */}
   <Experience />
   <Contact />

      </div>
      <Footer />


      
    </div>
  )
}

export default Home
