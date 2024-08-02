import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useRef, useEffect} from 'react';



const Contact = () => {

    const handleMail = () => {
        window.location.href = "mailto:aparnagupta813@gmail.com?subject=Hello%20there"
    }

    const ref = useRef(null)
    const elementJump = useAnimation()
    const carMove = useAnimation()
    const inView = useInView(ref, {once: false})

    useEffect(() => {
      if (inView)  {
        elementJump.start("jump")
        carMove.start("moved")
      }

    }, [inView] )



  return (
    <div  id= "contacts" className='flex justify-center bg-gradient-to-b from-slate-50 via-slate-100 to-lime-200  pt-32 pb-1 '>
    <div className='w-2/3 '> 
<div className='flex justify-between'>
<div>    
    <p className='font-bold text-lime-700 text-lg'>  Feeling Social? Let's connect!</p> 
    <p className='font-bold text-2xl' > Reach me at <motion.span className='text-lime-700'  whileHover = {{borderBottom: "8px solid #a3e635"  }}
    onClick = {handleMail} transition = {{type: 'spring', duration: 1}} > aparnagupta813@gmail.com  </motion.span></p>
    
   
    </div>
        <div className='flex justify-between text-black w-1/4 mt-6'>
                    <Link to="https://github.com/aparn-gupta" > <motion.div  whileHover = {{scale: 1.4, color: "white" }} transition = {{type : "spring", stiffness: 400}} > <GitHubIcon sx={{width: "2.5rem", height: "2.5rem", }}   className='hover:text-lime-400 w-20 h-20'  />  </motion.div>     </Link>
                   <div onClick={handleMail}> <motion.div  whileHover = {{scale: 1.4, color: 'white'}} transition = {{type: 'spring', stiffness: 400}} >  <EmailIcon sx={{width: "2.5rem", height: "2.5rem"}} className='hover:text-lime-400' /> </motion.div>  </div>
                  <Link to="https://www.linkedin.com/in/aparna813/" >  <motion.div whileHover = {{scale: 1.4, color: 'white'}} transition = {{type: 'spring', stiffness: 400 }} >  <LinkedInIcon sx={{width: "2.5rem", height: "2.5rem"}}  className='hover:text-lime-400'/> </motion.div>    </Link>
               
                </div>
</div>

                <div className='my-20'>
        <div className='text-black font-bold text-4xl flex' ref= {ref} > 
          <motion.div variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:0.5, stiffness: 400}} className = "mr-3" > Get  </motion.div>      
          <motion.div variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:0.6, stiffness: 400}} className = "mr-3" > set  </motion.div> 
          <motion.div  variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:0.7, stiffness: 400}}className = "mr-3" > to  </motion.div> 
          <motion.div variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:0.8, stiffness: 400}} className = "mr-3" > build  </motion.div> 
          <motion.div variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:0.9, stiffness: 400}} className = "mr-3" > your  </motion.div> 
          <motion.div variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:1, stiffness: 400}} className = "mr-3" > website  </motion.div> 
          <motion.div variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:1.1, stiffness: 400}} > together  </motion.div> 
          <motion.div variants = {{none: {y: 0}, jump: {y : [-80, 0]} }}  intiial = "none" animate = {elementJump}  transition = {{type: 'spring', duration: 0.5, delay:1.2, stiffness: 400}}>  ...  </motion.div> 
          
          
          
          </div>
     <motion.div  ref= {ref}  whileHover =  {{x: 800}} transition = {{duration : 10, type: 'spring', delay: 0}} 
     variants = {{parked : {x : 0}, moved: {x: 800}}}  intial = 'parked'  >  <img src='https://cdn.gamedevmarket.net/wp-content/uploads/20191203194912/ef01b7965d29e9c56b0326706dbd58c6953af9a5.gif' className='w-48 h-48' /></motion.div>
    </div>




    </div>
    


      
    </div>
  )
}

export default Contact
