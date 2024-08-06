import React from 'react';
import image3 from './hyggex.png';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation  } from 'framer-motion';
import { useEffect, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Edtech = () => {

  const ref = useRef(null)
  const inView =  useInView(ref, {once: false})

  const mainControls = useAnimation()
  const borderanime = useAnimation("enlrage")

  useEffect( () => {
    if (inView) {
      mainControls.start("visible")
      borderanime.start("enlarge")
    }
  } , [inView] )




  return (
    <div className='w-screen flex justify-center bg-gradient-to-b from-slate-50 to-lime-50 py-12 '>
    <div className='w-3/4 flex justify-between'>
    <Link to = "https://edtech-website-tawny.vercel.app/" >  <img src= {image3}  className='w-96 h-72 mt-20 border-2 border-slate-100 rounded-2xl  object-contain hover:shadow-2xl' /> </Link>

   <div className='w-1/2'>
  

<h2 className='mt-8 text-3xl font-bold '> Edtech App</h2>
<motion.div ref = {ref}  className = "w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 490] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>

<div> 
  <p className='mb-3'>   A feature-rich fully responsive educational technology 
  web application designed to enhance online learning experiences.  </p>
 <ul>
<li> <span className='font-semibold '> Modern UI Design: </span> Leveraged modern web development tools and practices to 
create an interactive, responsive, and user-friendly interface, 
enhancing the user interface with modern design principles. </li>
<li> <span className='font-semibold '> Functional Components: </span> 
Implemented functional components and hooks to manage 
state and lifecycle, ensuring efficient and maintainable code. 
</li>
<li> <span className='font-semibold '> Dynamic Routing: </span> 
Utilized React Router for seamless client-side navigation, 
improving user experience with dynamic routing.</li> </ul> </div>

<div className='flex  mt-12'  ref={ref} >
<motion.div className = 'bg-lime-400 text-lg px-4 h-8 mr-2' variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0}} initial = 'hidden' animate = {mainControls} > React.js </motion.div>
<motion.div className = 'bg-lime-400 text-lg px-4 h-8 mr-2' variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'hidden' animate = {mainControls} > Tailwind CSS </motion.div>


 
</div>


<div className='flex'> <Link  to= "https://edtech-website-tawny.vercel.app/" ><motion.div whileHover = {{x: 64}}  transition = {{type: 'spring', stiffness: 400,   duration: 1}} whileFocus = {{scale: 1.5}}   >   <button className=' h-14 w-36 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white text-lg hover:text-black font-bold
  hover:border-black hover:border-2    '> Github  <OpenInNewIcon /> </button>  </motion.div> </Link>
<div className=' hidden h-14 w-8 border-2 border-b-black border-r-black mt-8   '> </div></div>
   </div>


 



    </div>
   
 </div>
  )
}

export default Edtech
