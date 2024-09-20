import React from 'react';
import image7 from './weather.png';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation  } from 'framer-motion';
import { useEffect, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Restapi = () => {

  const ref = useRef(null)
  const inView =  useInView(ref, {once: false})

  const mainControls = useAnimation()
  const borderanime  = useAnimation()

  useEffect( () => {
    if (inView) {
      mainControls.start("appear")
      borderanime.start("enlarge")
    }
  } , [inView] )




  return (
    <div className=' w-screen flex justify-center bg-gradient-to-b from-slate-50 to-lime-50'>
    <div className='w-3/4 flex justify-between'>
    <Link to = "https://weather-app-xi-gules-50.vercel.app/" >  <img src= {image7}  className='w-96 h-72 mt-20 border-2 border-slate-100 rounded-2xl  object-contain hover:shadow-2xl' /> </Link>

   <div className='w-1/2'>
  

<h2 className='mt-8 text-3xl font-bold '> Live Weather: Indian Localities</h2>
<motion.div ref = {ref}  className = "w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 490] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>

<div> <p className='mb-3'> A weather application that provides weather data for various localities acrosss Indian cities  </p>
 <ul>
<li> <span className='font-bold'> Seamless Search Options: </span> Offers two methods to explore live weather data—by entering a locality or by using coordinates. </li>
<li>
 <span className='font-bold'> Smart Auto-Fill:  </span> Integrated a dataset of local places for intuitive and efficient search experience.
</li>
<li>
<span className='font-bold'>Dynamic Weather Insights:</span> Provides real-time weather updates for various localities across Indian cities.</li> 
<li>
<span className='font-bold'>User-Centric Design:</span> Features a fully responsive and visually appealing interface, with design inspired by Google homepage.</li> </ul> </div>

<div className='flex  mt-12' ref={ref}>

  
<motion.div className = 'bg-lime-400 text-lg px-4 h-8 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0}} initial = 'disappear' animate = {mainControls} > Next.js </motion.div>
<motion.div className = 'bg-lime-400 text-lg px-4 h-8 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'disappear' animate = {mainControls} > REST APIs </motion.div>
<motion.div className = 'bg-lime-400 text-lg px-4 h-8 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.4}} initial = 'disappear' animate = {mainControls} > TypeScript </motion.div>

<motion.div className = 'bg-lime-400 text-lg px-4 h-8 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.6}} initial = 'disappear' animate = {mainControls} > Tailwind CSS </motion.div>


   

  
 
</div>

<div className='flex'> <Link  to= "https://github.com/aparn-gupta/Weather-App/" ><motion.div whileHover = {{x: 64}}  transition = {{type: 'spring', stiffness: 400,   duration: 1}} whileFocus = {{scale: 1.5}}   >   <button className=' h-14 w-36 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white text-lg hover:text-black font-bold
  hover:border-black hover:border-2    '> Github  <OpenInNewIcon /> </button>  </motion.div> </Link>
<div className='hidden h-14 w-8 border-2 border-b-black border-r-black mt-8   '> </div></div>
   </div>
   


 



    </div>
   
 </div>
  )
}

export default Restapi
