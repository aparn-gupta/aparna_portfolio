import React from 'react';
import image5 from './image5.jpeg';
import { Link } from 'react-router-dom';
import  { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Anime = () => {

  const ref = useRef(null)
  const inView =  useInView(ref)

  const mainControls = useAnimation()
  const borderanime = useAnimation()

  useEffect( () => {
    if (inView) {
      mainControls.start("appear")
      borderanime.start("enlarge")
    }
  } , [inView] )





  return (
    <div className=' w-screen flex justify-center bg-gradient-to-t from-slate-50 to-lime-50'>
    <div className=' w-5/6  lg:w-3/4 lg:flex justify-between'>
   <div className=' w-full lg:w-1/2 '>
  

<h2 className='mt-8 text-3xl font-bold '> AI Fashion Assistant </h2>
<motion.div ref = {ref}  className = " hidden lg:block w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 490] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<motion.div ref = {ref}  className = " block lg:hidden w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 315] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<div> 
  <p className='mb-3'> A chat application using the Gemini API that serves as a 
    virtual fashion assistant, designed to help users with a wide range 
    of fashion-related queries. The application provides personalized fashion
     advice, recommendations, and answers to common fashion questions  </p>
 <ul>
<li> <span className='font-semibold '> API Integration:</span>    Utilizes the Gemini API to process and respond to 
  fashion-related questions, demonstrating proficiency in integrating third-party services. </li>
<li> <span className='font-semibold '> User-Friendly Interface: </span>  
 Designed with an intuitive interface to ensure smooth and engaging interactions.
</li>
{/* <li>
Fashion Advice & Recommendations: Offers tailored fashion suggestions based on user 
inquiries, helping users make informed style choices.</li> */}

<li> <span className='font-semibold '> Ongoing Improvement:</span> Currently working on implementing streaming chat 
  functionality to create a more dynamic and conversational experience.</li>

 </ul> </div>

<div className='flex   text-xs lg:text-lg mt-12' ref={ref}>

<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0}} initial = 'disappear' animate = {mainControls} > Next.js </motion.div> 

  <motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'disappear' animate = {mainControls} > REST APIs </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.4}} initial = 'disappear' animate = {mainControls} > Tailwind CSS </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.6}} initial = 'disappear' animate = {mainControls} > Axios </motion.div>
   

 
</div>

<div className='flex'> <Link  to= "https://github.com/aparn-gupta/AI-Fashion-Assistant" ><motion.div whileHover = {{x: 64}}  transition = {{type: 'spring', stiffness: 400,   duration: 1}} whileFocus = {{scale: 1.5}}   >   <button className=' h-14 w-36 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white text-lg hover:text-black font-bold
  hover:border-black hover:border-2    '> Github <OpenInNewIcon  /> </button>  </motion.div> </Link>
<div className=' hidden h-14 w-8 border-2 border-b-black border-r-black mt-8   '> </div></div>

   </div>


  <Link to = "https://ai-fashion-assistant.vercel.app/" >  <img src= {image5}  className='w-96 h-72 mt-20 border-2 border-slate-100 rounded-2xl  object-contain hover:shadow-2xl' /> </Link>




    </div>

  

   
 </div>
  )
}

export default Anime
