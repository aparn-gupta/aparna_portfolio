import React from 'react';
import { Link } from 'react-router-dom';
import  { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import image from './assets/innernote.png'


const FaceApi = () => {

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



//testcommit

  return (
    <div className=' w-screen flex justify-center bg-gradient-to-t from-slate-50 to-lime-50'>
    <div className=' w-5/6  lg:w-3/4 lg:flex justify-between'>
   <div className=' w-full lg:w-1/2 '>
  

<h2 className='mt-8 text-3xl font-bold '> InnerNote </h2>
<motion.div ref = {ref}  className = " hidden lg:block w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 490] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<motion.div ref = {ref}  className = " block lg:hidden w-2 h-1 border-t-8 border-lime-400 mb-8" variants = {{shorten: {width: 16}, enlarge:{width: [50, 100, 150, 200,  250, 315] } }}  intital = 'shorten' animate  = {borderanime} transition = {{type: 'spring', duration: 10, stiffness: 300 }}  > </motion.div>
<div> 
  <p className='mb-3'> A full-stack journaling app designed to demonstrate end-to-end authentication and security  </p>
 <ul className='list-disc'>
<li> Implemented <strong>Face API integration</strong> for biometric authentication, enabling <strong>face login</strong> for enhanced privacy. </li>
<li> Secured user accounts and content-privacy with <strong>JWT-based token authentication</strong> and <strong>password hashing </strong> for robust account management.
</li>
{/* <li>
Fashion Advice & Recommendations: Offers tailored fashion suggestions based on user 
inquiries, helping users make informed style choices.</li> */}

<li> Designed and implemented <strong>RESTful APIs</strong> for notes management and integrated proper error handling and validation.</li>
{/* <li> Built a clean, responsive frontend with a simple user experience focused on personal reflection and privacy.</li> */}

<li> Deployed on Alwaysdata, simulating <strong>production server handling</strong> and demonstrating skills in <strong>full-stack app deployment and hosting</strong>.</li>
<li>Covers key aspects of <strong>modern authentication flows, secure data handling </strong> and <strong> monolithic fullstack architecture.</strong>
{/* , and <strong>production-ready full-stack development practices</strong>. */}
</li>


 </ul> </div>

<div className='flex   text-xs lg:text-lg mt-12' ref={ref}>

<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0}} initial = 'disappear' animate = {mainControls} > Node.js </motion.div> 

  <motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.2}} initial = 'disappear' animate = {mainControls} >MySQL </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.4}} initial = 'disappear' animate = {mainControls} >Express.js  </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.6}} initial = 'disappear' animate = {mainControls} > TypeScript </motion.div>
<motion.div className = 'bg-lime-400  px-2.5 lg:px-4 py-1.5 mr-2' variants = {{disappear: {opacity: 0, scale: 0.4}, appear: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 2, delay: 0.8}} initial = 'disappear' animate = {mainControls} > React </motion.div>
   

 
</div>

<div className='flex'> <Link  to= "https://github.com/aparn-gupta/facial_recognition-backend" target='_blank' ><motion.div whileHover = {{scale: 1.19}}  transition = {{type: 'spring', stiffness: 400,   duration: 1}}  >   <button className=' h-14 w-36 mt-8 
 hover:shadow-2xl border-slate-100 bg-gradient-to-br from-slate-600 to bg-lime-600
  hover:from-lime-600 hover:to-slate-600 text-white text-lg hover:text-black font-bold
  hover:border-black hover:border-2    '> Github <OpenInNewIcon  /> </button>  </motion.div> </Link>
<div className=' hidden h-14 w-8 border-2 border-b-black border-r-black mt-8   '> </div></div>

   </div>


  <Link to = "https://innernote.alwaysdata.net/" target='_blank' >  <img src= {image}  className='w-96 h-72 mt-20 border-2 border-slate-100 rounded-2xl  object-contain hover:shadow-2xl' /> </Link>




    </div>

  

   
 </div>
  )
}

export default FaceApi
