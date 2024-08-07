import React from 'react';
import image2 from './Fbss.png';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {

  const referr = useRef(null)
  const isInView =  useInView(referr, {once: false})

  const mainControls = useAnimation()
  const borderanime = useAnimation()

  useEffect( () => {
    if (isInView) {
      mainControls.start("appear")
      borderanime.start("enlarge")
    }
  } , [isInView] )




  return (
    <div   className=' w-screen flex justify-center pt-12 bg-gradient-to-t from-slate-50 to-lime-50'>
       <div className='lg:w-3/4 w-5/6 lg:flex lg:justify-between'>
      <div className='w-full lg:w-1/2'>
      <h1 className='font-bold text-3xl mt-16 mb-4 bg-gradient-to-r from-slate-600 via-lime-400 to-lime-900 w-36 text-transparent bg-clip-text'> PROJECTS </h1>

<h2 className='mt-8 text-3xl font-bold '> InterAct: Networking App</h2>
<motion.div ref = {referr}  className = "hidden lg:block  w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 490] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<motion.div ref = {referr}  className = "block lg:hidden  w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 315] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<div>  <p className='mb-2.5' >A networking web app with design inspired by Facebook 
using React and used advanced features like hooks, creating an 
interactive user interface. Implemented simulated authentication, 
and dynamic user interactions.</p>
 <ul>
<li> <span className='font-semibold '> State Management:  </span> Implemented state management and component lifecycle 
methods with React hooks, and routing and navigation through 
React-router.  </li>
<li> <span className='font-semibold '>Dynamic Feed: </span>
Created a dynamic feed where users can post updates, like and 
comment on posts and view posts and stories. 
</li>
<li> <span className='font-semibold '> Local Storage: </span>
Utilized local storage for saving user posts, stories, and login 
data. </li> 
<li> <span className='font-semibold '> Version Control: </span>
Used version control (Git) for source code management.  </li></ul> </div>

<div className='flex  mt-12 text-xs lg:text-lg '  ref={referr}  >
{/* <p className='bg-lime-400 text-lg px-4 h-8 mr-2'> React.js </p>
     <p className='bg-lime-400 text-lg px-4 h-8 mr-2'> Tailwind CSS</p>
     <p className='bg-lime-400 text-lg px-4 h-8 mr-2'> Material-UI</p>
     <p className='bg-lime-400 text-lg px-4 h-8 mr-2'> React-slick</p> */}

<motion.div className = 'bg-lime-400 px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0}} initial = 'disappear' animate = {mainControls} > React.js </motion.div>
<motion.div className = 'bg-lime-400 px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'disappear' animate = {mainControls} > Tailwind CSS </motion.div>
<motion.div className = 'bg-lime-400 px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.4}} initial = 'disappear' animate = {mainControls} > Material-UI </motion.div>
<motion.div className = 'bg-lime-400 px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.6}} initial = 'disappear' animate = {mainControls} > React-slick </motion.div> 

   
    
</div>


<div className='flex'> <Link  to= "https://github.com/aparn-gupta/networking-site" ><motion.div whileHover = {{x: 64}}  transition = {{type: 'spring', stiffness: 400,   duration: 1}} whileFocus = {{scale: 1.5}}   >   <button className=' h-14 w-36 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white text-lg hover:text-black font-bold
  hover:border-black hover:border-2    '> Github  <OpenInNewIcon />  </button>  </motion.div> </Link>
<div className='hidden h-14 w-8 border-2 border-b-black border-r-black mt-8   '> </div></div>

      </div>


     <Link to = "https://networking-site.vercel.app/" >  <img src= {image2}  className='w-96 h-72 lg:mt-44 border-2 border-slate-100 rounded-2xl   object-contain hover:shadow-2xl' /> </Link>



 
       </div>

     

      
    </div>
  )
}

export default Projects
