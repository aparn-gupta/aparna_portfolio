import React from 'react';
import image8 from './GnewsSnip.png';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation  } from 'framer-motion';
import { useEffect, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Gnews = () => {

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
    <div className='w-5/6   lg:w-3/4 lg:flex justify-between'>
    <Link to = "https://gnews-app.vercel.app/" className='hidden lg:block' >  <img src= {image8}  className='w-96 h-72 mt-20 border-2 border-slate-100 rounded-2xl  object-contain hover:shadow-2xl' /> </Link>

   <div className='w-full lg:w-1/2'>
  

<h2 className='mt-8 text-3xl font-bold '> Gnews App</h2>
<motion.div ref = {ref}  className = "hidden lg:block w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 490] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<motion.div ref = {ref}  className = "block lg:hidden  w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 315] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<div> 
  <p className='mb-3'>  News Application using Gnews API  </p>
 <ul>
<li> <span className='font-semibold '> Latest News:</span> Features real-time updates with the latest headlines from around the world displays the latest news articles according to different categories ike health, business, sports, technology, entertainment and many more.</li>
<li> <span className='font-semibold '> Search by Keywords:  </span> 
Allows users to search news articles using keywords in search box.
</li>
<li> <span className='font-semibold '> Useful filters: </span> 
Users can filter news articles according to language, country, date of publishing and the filters can be integrated with search keyword. </li> 
<li> <span className='font-semibold '> Responsive Design: </span> Fully responsive, user-friendly interface for all devices with intuitive navigation and pagination .
 </li> </ul> </div>

<div className='flex  mt-12   text-xs lg:text-lg'  ref={ref} >
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0}} initial = 'hidden' animate = {mainControls} > React.js </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'hidden' animate = {mainControls} > REST APIs </motion.div>

<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'hidden' animate = {mainControls} > Bootstrap </motion.div>


 
</div>


<div className='flex'> <Link  to= "https://github.com/aparn-gupta/GnewsApp" ><motion.div whileHover = {{x: 64}}  transition = {{type: 'spring', stiffness: 400,   duration: 1}} whileFocus = {{scale: 1.5}}   >   <button className=' h-14 w-36 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white text-lg hover:text-black font-bold
  hover:border-black hover:border-2    '> Github  <OpenInNewIcon /> </button>  </motion.div> </Link>
<div className=' hidden h-14 w-8 border-2 border-b-black border-r-black mt-8   '> </div></div>
   </div>


   <Link to = "https://gnews-app.vercel.app/" className='block lg:hidden' >  <img src= {image8}  className='w-96 h-72 mt-20 border-2 border-slate-100 rounded-2xl  object-contain hover:shadow-2xl' /> </Link>

 



    </div>
   
 </div>
  )
}

export default Gnews
