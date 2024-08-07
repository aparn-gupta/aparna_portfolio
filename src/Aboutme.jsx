import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Aboutme = () => {

  
  const handleScroll = () => {
    // window.scrollTo({
    //   top: document.getElementById("experience").offsetTop,
    //   behavior: 'smooth'

    // })

  }

  const handleContact = () => {
    window.scrollTo({
      top: document.getElementById("footer-contacts").offsetTop,
      behavior: 'smooth'
    })
    
  }

  const handleMail = () => {
    window.location.href = "mailto:aparnagupta813@gmail.com?subject=Hello%20there"
   }
  



  return (
    <div className='bg-black'>
        <div className='w-screen h-300 relative '>
         <img src='https://i.pinimg.com/originals/f6/15/74/f615740d8ec75ad36e322ecd9da8b129.gif' className='w-screen h-300' />
         <div className=' text-white text-lg absolute top-0 left-0 w-screen '>
          <div className='flex justify-center'>
          <ul  className='mt-12 flex justify-between lg:w-1/3  w-4/5' >
              <Link to= "/" >  <li className='hover:text-lime-400 hover:animate-bounce'  >  Home </li></Link>              
           <Link to = "/home#experience" className='hover:text-lime-400 hover:animate-bounce' > Work </Link>
              <li  className='hover:text-lime-400 hover:animate-bounce' onClick = {handleContact} > Contact me</li>
              <Link  to=  '/aboutme' >  <li className='text-lime-400 hover:animate-bounce'  > More </li>  </Link>
            </ul>  </div>
          

          <div className=' w-screen flex justify-center'> 
          <div className=' w-11/12 lg:w-2/3   ' >
           <h1 className='font-bold ml-3 lg:ml-0 lg:w-1/2 text-3xl mt-20 bg-gradient-to-r from-slate-600 via-lime-400 to-lime-900 text-transparent bg-clip-text mb-10'> LICENSES AND CERTIFICATIONS </h1>
        
        
        
        <div className='p-8 hover:bg-gradient-to-br hover:from-translime hover:to-translimedark '>
        <p className='font-bold text-xl '> The Complete JavaScript Course 2024</p> 
          <p className='font-semibold'>Udemy    </p>  
            <p  className=''> March 2024 - August 2024  </p>
            <p> <span className=' font-bold text-lime-600  mr-1'> Skills:</span> JavaScript </p>
        </div>


         <div className='p-8 hover:bg-gradient-to-br hover:from-translime hover:to-translimedark ' >
         <p className='font-bold text-xl  '> Career Essentials in Software Development by Microsoft and LinkedIn </p> 
          <p className='font-semibold'>Microsoft </p>  
            <p className=''> May 2024  </p>
            <p> <span className=' font-bold text-lime-600  mr-1'> Skills:</span> Software Development, Programming </p>
         </div>

        <div className='p-8 hover:bg-gradient-to-br hover:from-translime hover:to-translimedark '>
  
        <p className='font-bold text-xl '> React.js Essential Training </p> 
          <p className='font-semibold'>LinkedIn </p>  
            <p className=''> June 2024   </p>
            <p> <span className=' font-bold text-lime-600  mr-1'> Skills:</span> React.js </p>
          </div>

          <div  className='p-8 hover:bg-gradient-to-br hover:from-translime hover:to-translimedark '>            
          <p className='font-bold text-xl  '> JavaScript Essential Training </p> 
                    <p className='font-semibold'>LinkedIn </p>  
                      <p className=''>  June 2024   </p>
                      <p> <span className=' font-bold text-lime-600 mr-1'> Skills:</span> JavaScript </p>
          </div>

           </div>


          </div>



    
      


            </div>



         
            

            <div  className='w-screen bg-black  pb-8 lg:pb-16  pt-48 lg:pt-4 flex justify-center' >
       <div className='w-4/5 lg:flex lg:justify-between'>


       <div className='text-white mt-8 text-sm'>
        &#169; Aparna Gupta
        </div>


       <div className='flex justify-between text-lime-400  w-2/5 lg:w-1/5  mt-6'   id = "footer-contacts" >
                    <Link to="https://github.com/aparn-gupta" > <motion.div  whileHover = {{scale: 1.6, color: "white" }} transition = {{type : "spring", stiffness: 400}} > <GitHubIcon sx={{width: "2.2rem", height: "2.2rem", }}   className='hover:text-white w-20 h-20'  />  </motion.div>     </Link>
                  <div onClick =  {handleMail}>  <motion.div  whileHover = {{scale: 1.6, color: 'white'}} transition = {{type: 'spring', stiffness: 400}} >  <EmailIcon sx={{width: "2.2rem", height: "2.2rem"}} className='hover:text-white' /> </motion.div>  </div>
                  <Link to="https://www.linkedin.com/in/aparna813/" >  <motion.div whileHover = {{scale: 1.6, color: 'white'}} transition = {{type: 'spring', stiffness: 400 }} >  <LinkedInIcon sx={{width: "2.2rem", height: "2.2rem"}}  className='hover:text-white'/> </motion.div>    </Link>
        </div>
       
       
       </div>
        </div>
         



         </div>


             
    </div>
  )
}

export default Aboutme
