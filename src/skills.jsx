import React from 'react'
import image1 from './Aparna.jpg';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';



const Skills = () => {

  const ref = useRef(null)
  const inView =  useInView(ref, {once: false})

  const mainControls = useAnimation()

  useEffect( () => {
    if (inView) {
      mainControls.start("appear")
    }
  } , [inView] )


    const handleContact = () => {
      window.scrollTo({
        top: document.getElementById("contacts").offsetTop,
        behavior :'smooth'
      })
    }

    const handleMail = () => {
      window.location.href = "mailto:aparnagupta813@gmail.com?subject=Hello%20there"
     }
 




  return (
    
    <div  ref = {ref} className='w-screen flex justify-center  pt-16 lg:pt-28 bg-gradient-to-b from-slate-50 to-lime-50'>
     <div className='w-11/12 lg:w-3/4  lg:flex lg:justify-between'>   

   
     {/* <img src= {image1}  className='w-5/6 lg:w-1/3 h-96 object-cover rounded-2xl mb-16 lg:mb-0'/> */}
   <div className='flex justify-center lg:block'>   <img src= {image1}  className='w-5/6 lg:w-3/4 h-96 object-cover rounded-2xl mb-16 lg:mb-0'/>
   </div>

     <div className=' w-full  lg:w-2/3  '>

    <div className='flex justify-between  text-xs lg:text-lg'>
    {/* <p className='bg-black text-white text-lg px-4 h-8'> React.js </p>
     <p className='bg-black text-white text-lg px-4 h-8'> JavaScript</p>
     <p className='bg-black text-white text-lg px-4 h-8'> Next.js</p>
     <p className='bg-black text-white text-lg px-4 h-8'> TypeScript </p>
     <p className='bg-black text-white text-lg px-4 h-8'> REST APIs </p> */}

     
    <motion.div  className='bg-black text-white  px-2 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 0}} initial = 'disappear' animate =  {mainControls} >  React.js </motion.div>
    <motion.div  className='bg-black text-white  px-2 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 0.2}} initial = 'disappear' animate =  {mainControls} >  JavaScript </motion.div>
    <motion.div  className='bg-black text-white  px-2 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 0.4}} initial = 'disappear' animate =  {mainControls} >  Next.js </motion.div>
    <motion.div  className='bg-black text-white  px-2 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 0.6}} initial = 'disappear' animate =  {mainControls} >  TypeScript </motion.div>
    <motion.div  className='bg-black text-white  px-2 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 0.8}} initial = 'disappear' animate =  {mainControls} >  REST APIs </motion.div>
     <motion.div  className='bg-black text-white  px-2 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 1}} initial = 'disappear' animate =  {mainControls} >  Redux </motion.div>
   
    </div>

    <div className='flex justify-between mt-3  text-xs lg:text-lg'>
    {/* <p className='bg-black text-white  px-2 lg:px-4 py-2'> Tailwind CSS </p>
     <p className='bg-black text-white  px-2.5 lg:px-4 py-2'> Material UI </p>
     <p className='bg-black text-white  px-2.5 lg:px-4 py-2'> HTML/CSS </p>     
     <p className='bg-black text-white  px-2.5 lg:px-4 py-2'> Python  </p>
     <p className='bg-black text-white  px-2.5 lg:px-4 py-2'> MySQL </p> */}

<motion.div  className='bg-black text-white  px-2.5 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 1.2}} initial = 'disappear' animate =  {mainControls} >  Tailwind CSS </motion.div>
    <motion.div  className='bg-black text-white  px-2.5 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 1.4}} initial = 'disappear' animate =  {mainControls} > Material UI</motion.div>
    <motion.div  className='bg-black text-white  px-2.5 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 1.6}} initial = 'disappear' animate =  {mainControls} >  HTML/CSS  </motion.div>
    <motion.div  className='bg-black text-white  px-2.5 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 1.8}} initial = 'disappear' animate =  {mainControls} >  Python </motion.div>
     <motion.div  className='bg-black text-white  px-2.5 lg:px-4 py-2 '  variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity: 1, scale: 1 }   }} 
    transition = {{duration: 2, type :'spring', delay: 2}} initial = 'disappear' animate =  {mainControls} >  MySQL </motion.div>
    
     </div>

     <h1 className='font-bold text-2xl mt-10 mb-3'> Crafting Cool Web Experiences </h1>
     <div  className='text-lg'  > Hoi! I am Aparna, a frontend wizard who fell head over heels for programming. It all started with a spark of curiosity, 
      and now I am obsessed with crafting sleek, interactive web apps and websites. 
      I thrive on building user interfaces that are not just functional but also seriously cool. Let's create something amazing together!</div>

        <div className='flex w-3/4 justify-between'> 

        <button className=' h-14 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white font-xl hover:text-black font-bold
  hover:border-black hover:border-2  px-8 mr-2'  onClick = {handleMail}  > Get in Touch! </button>



         <Link to= '/aboutme#top' > <button className=' h-14 px-4 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white font-xl hover:text-black font-bold
  hover:border-black hover:border-2  '> View Licenses and Certifications  <ArrowRightAltIcon /> </button></Link>
  
          {/* <motion.div  onClick = {handleContact}  className = 'mb-6 font-bold text-lg text-lime-700 mt-12 w-32' whileHover = {{borderBottom : "6px solid #a3e635" }} transition = {{type: 'spring', duration: 2, stiffness: 400 }} > Get in Touch ? </motion.div> */}
        
        
         </div>
        


   

    

     </div>


     </div>
      
    </div>
  )
}

export default Skills



// <motion.div  className = "text-red-600 font-bold text-4xl w-28 bg-green-500 "   variants = {{
//   appear : {opacity : 1, scale: 2 },
//   disappear: {opacity: 0, scale: 0.5 }
// }} initial = "disappear" animate = "appear"   transition = {{duration: 4, type: 'spring'}} > Hello  </motion.div>
