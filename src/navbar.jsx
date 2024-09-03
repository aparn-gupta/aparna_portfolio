import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typewriter } from "react-simple-typewriter";
import  { motion } from 'framer-motion';

const Navbar = () => {

 const handleClick = () => {
  window.location.href = "mailto:aparnagupta813@gmail.com?subject=Hello%20there"
 }



const handleScroll = (e) => {

  e.preventDefault()
  window.scrollTo({
    top: document.getElementById("experience").offsetTop,
    behavior: 'smooth'
  })


}

const handleContact = (e) => {
  e.preventDefault()
  window.scrollTo({
    top: document.getElementById("contacts").offsetTop,
    behavior: 'smooth'


  })

}

  return (
    <div className='w-screen h-screen relative'>
         <img src='https://windowscustomization.com/wp-content/uploads/2019/09/Minimal-Wavescape.gif' className='w-screen h-screen' />
         <div className=' text-white text-lg absolute top-0 left-0 w-full flex justify-center  '>
           
            <div className='absolute flex justify-between w-4/5 lg:w-1/3  top-12 z-40'>
           <Link to= "/" >  <div className='hover:text-lime-400 hover:animate-bounce'  >  Home </div></Link>
              
                <div className='hover:text-lime-400 hover:animate-bounce' onClick={handleScroll} > Work </div>
                <div  className='hover:text-lime-400 hover:animate-bounce' onClick = {handleContact} > Contact me</div>
                <Link  to=  '/aboutme' >  <div className='hover:text-lime-400 hover:animate-bounce'  > More </div>  </Link>
                 
               
            </div> 



         </div>


         <div className='w-full absolute top-0  flex justify-center flex-col items-center h-screen'>
          <div className='w-4/5'>
          <div className='w-3/4'>
                <p className='text-white text-5xl lg:text-7xl font-bold '> Howdy,  </p>
              
                <p className='text-white text-5xl lg:text-7xl font-bold mt-2'>  I'm Aparna  </p>
                <p className='text-white text-5xl lg:text-7xl font-bold mt-2'> Frontend Developer</p>
                <p className='text-lime-400   text-4xl lg:text-5xl font-bold mt-3 animate-none'>and <span className='text-lime-400'> <Typewriter 
                 words = {["a mountain wanderer", "an organising freak",  "an animal-rights enthusiast", "a bulk memeposter", "a brew junkie", "a whitepiller" ]}  loop = {30} />   </span>  </p>
           
                <div className='flex justify-between text-lime-400 w-4/5 lg:w-1/5 mt-10'>
                    <Link to="https://github.com/aparn-gupta" > <motion.div  whileHover = {{scale: 1.6, color: "white" }} transition = {{type : "spring", stiffness: 400}} > <GitHubIcon sx={{width: "2.4rem", height: "2.4rem", }}   className='hover:text-white w-20 h-20'  />  </motion.div>     </Link>
                  <div onClick =  {handleClick}>  <motion.div  whileHover = {{scale: 1.6, color: 'white'}} transition = {{type: 'spring', stiffness: 400}} >  <EmailIcon sx={{width: "2.4rem", height: "2.4rem"}} className='hover:text-white' /> </motion.div>  </div>
                  <Link to="https://www.linkedin.com/in/aparna813/" >  <motion.div whileHover = {{scale: 1.6, color: 'white'}} transition = {{type: 'spring', stiffness: 400 }} >  <LinkedInIcon sx={{width: "2.4rem", height: "2.4rem"}}  className='hover:text-white'/> </motion.div>    </Link>
               
                </div>

            </div>
          </div>

            </div>

      
    </div>
  )
}

export default Navbar
