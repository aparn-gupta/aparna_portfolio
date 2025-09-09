import React from 'react';
import image7 from './assets/gadget-img.png';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation  } from 'framer-motion';
import { useEffect, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Gadgets = () => {

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
    <div className='w-5/6   lg:w-3/4 lg:flex justify-between'>
    <Link to = "https://gadgets-f14x.vercel.app/" target='_blank' >  <img src= {image7}  className='w-96 h-72 mt-20 border-2 border-slate-100 rounded-2xl  object-contain hover:shadow-2xl' /> </Link>

   <div className='w-full lg:w-1/2'>
  

<h2 className='mt-8 text-3xl font-bold '> Ultimate Gadgeting: Gadget Resale App (MERN Project) </h2>
<motion.div ref = {ref}  className = "hidden lg:block w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 490] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<motion.div ref = {ref}  className = "block lg:hidden  w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 315] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<div> <p className='mb-3'> A gadget reselling website that allows users to post new gadgets with details for other users to see it and contact them.  </p>
 <ul>
<li> <span className='font-bold'> Relevant data posting: </span> Users can post and view new gadget for resale. </li>
<li>
 <span className='font-bold'> NoSQL database  </span> Integrated MongoDB database for storing user data.
</li>
<li>
<span className='font-bold'>CRUD operations:</span> Built GET, POST, PATCH and DELETE apis using Node.js on Express Server to post, fetch, update and delete gadgets. </li> 
<li>
<span className='font-bold'>User-Centric Design:</span> Fully responsive and visually appealing interface, implementing parallex effect, appropriate animatations and bakcdrop filters</li> 

<li>
<span className='font-bold'>File Storage and fetching:</span> Integrated Cloudinary for efficient file storage and retrieval.
</li> 
</ul> 
</div>

<div className='flex  mt-12' ref={ref}>

  
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0}} initial = 'disappear' animate = {mainControls} > Node.js </motion.div> 

  <motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'disappear' animate = {mainControls} > MongoDB </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.4}} initial = 'disappear' animate = {mainControls} > Express.js </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.6}} initial = 'disappear' animate = {mainControls} > React </motion.div>

<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.6}} initial = 'disappear' animate = {mainControls} > Bootstrap </motion.div>


   

  
 
</div>

<div className='flex pb-8'> <Link  to= "https://github.com/aparn-gupta/gadgets" target='_blank' ><motion.div whileHover = {{scale: 1.19}}  transition = {{type: 'spring', stiffness: 400,   duration: 1}}    >   <button className=' h-14 w-36 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white text-lg hover:text-black font-bold
  hover:border-black hover:border-2    '> Github  <OpenInNewIcon /> </button>  </motion.div> </Link>
<div className='hidden h-14 w-8 border-2 border-b-black border-r-black mt-8   '> </div></div>
   </div>
   


 



    </div>
   
 </div>
  )
}

export default Gadgets
