import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useLocation } from 'react-router';

const Experience = () => {

    const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);




  const ref = useRef(null)
  const inView = useInView(ref, {once: false})
  const borderanime = useAnimation()

  useEffect(() => {
    if (inView) {
      borderanime.start("long")
    }

  }, [inView] )


  return (
    <div className='flex justify-center w-screen bg-gradient-to-t from-slate-50 to-slate-50 pt-20'  id='experience' >
       <div className='lg:w-4/5 w-11/12 flex justify-center p-12  bg-slate-50' > 
     <div className=''>
     <h1 className='font-bold text-3xl mb-12 bg-gradient-to-r from-slate-600 via-lime-400 to-lime-900 lg:w-96 text-transparent bg-clip-text'> PROFESSIONAL ROLES </h1>
     <h2 className='mt-6 text-3xl font-bold lg:w-96'> Full-Stack Developer </h2>
    
     <motion.div  ref= {ref} className = 'block lg:hidden h-1 w-2 border-t-8 border-lime-400 mb-6 mt-4' variants = {{short: {width: 20 }, long: {width: 325} }} intial = "short"  animate = {borderanime} transition = {{type: 'spring', duration: 8, stiffness: 400 }} > </motion.div>
     <motion.div  ref= {ref} className = 'hidden lg:block h-1 w-2 border-t-8 border-lime-400 mb-6' variants = {{short: {width: 20 }, long: {width: 550} }} intial = "short"  animate = {borderanime} transition = {{type: 'spring', duration: 8, stiffness: 400 }} > </motion.div>
      
       <h2 className='my-6 text-2xl font-semibold lg:w-72'> CSA Engineering </h2>
    <div className='lg:flex justify-between text-lime-700 text-lg mb-8 '><p>September 2024 -  Present </p>  <p className='text-slate-500'>  </p>  </div>
    <div className=''>  

      <div>
      <ul>
        <li className='list-disc mb-5'><strong>Developed and managed</strong> the entire frontend of a CRM-like employee time-booking application using <strong>React.js</strong> and <strong>REST APIs</strong>, including <strong>session and login management</strong>. Built a <strong>Proof of Concept</strong> that secured client approval, resulting in a <strong>successful project acquisition.</strong></li>

        <li className='list-disc mb-5'>
        Led the frontend development of another CRM application, aligning closely with client requirements. Delivered a <strong>user-friendly and intuitive interface</strong>, earning <strong>direct client appreciation</strong> for its usability and feature set.

        </li>

        <li className='list-disc mb-5'> <strong>Contributed to QuickBooks API integration</strong>, developing backend APIs to seamlessly <strong>fetch and manage financial data</strong>, enhancing <strong> app functionality and accounting efficiency</strong>.</li>

        <li className='list-disc mb-5'>
        <strong>Managed both frontend and backend of an extensive internal CRM system</strong>, covering <strong>employee resource management, sales, finance, project management, and payslip processing</strong>, improving <strong> system efficiency and usability</strong>.
        </li>
      </ul>
 
 
 
      </div>

   
    
    </div>




    <div>
    <h2 className='mt-12 text-3xl font-bold lg:w-96'> Full-Stack Developer Intern </h2>
    
    <motion.div  ref= {ref} className = 'block lg:hidden h-1 w-2 border-t-8 border-lime-400 mb-6 mt-4' variants = {{short: {width: 20 }, long: {width: 325} }} intial = "short"  animate = {borderanime} transition = {{type: 'spring', duration: 8, stiffness: 400 }} > </motion.div>
    <motion.div  ref= {ref} className = 'hidden lg:block h-1 w-2 border-t-8 border-lime-400 mb-6' variants = {{short: {width: 20 }, long: {width: 550} }} intial = "short"  animate = {borderanime} transition = {{type: 'spring', duration: 8, stiffness: 400 }} > </motion.div>
     
      <h2 className='my-6 text-2xl font-semibold lg:w-72'> Xzect Labs Pvt Ltd </h2>
   <div className='lg:flex justify-between text-lime-700 text-lg mb-8 '><p>June 2024 - August 2024 </p>  <p className='text-slate-500'> </p>  </div>
   <div className=''>  

   {/* <p className='font-bold mt-6 mb-2'> Chatbot Development for fashion and styling</p> */}

<ul>  <li className='list-disc mb-4'> Designed and developed a chatbot using the Gemini API to provide information on fashion and styling. Integrated predefined prompts to address common queries, enhancing user interaction and support. </li> 






<li className='list-disc mb-4'>Utilized Next.js, TypeScript, React.js, and Tailwind CSS to create fully responsive, user-friendly interfaces for clients.Ensured seamless user experience across various devices with a mobile-first design approach.</li>






<li className='list-disc mb-4'>Focused on understanding and meeting client needs, delivering projects that enhance client satisfaction and engagement.   </li>

</ul>

   
   </div>
    </div>






    
       
     </div>
       
       
        </div>
     
    </div>
  )
}

export default Experience
