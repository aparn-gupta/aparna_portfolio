import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div>
        <div className='w-full bg-black text-white p-8 flex justify-center  text-xs lg:text-sm '>
       <div className='lg:flex'>
       <p className='flex justify-center lg:block' >&#169; 2023-2024 </p> 
       <p className='hidden lg:block lg:mx-1.5'>  | </p>
       <p> Designed and coded with <FavoriteIcon className='text-red-500 mx-1' /> by Aparna Gupta</p>
       </div>


        </div>
      
    </div>
  )
}

export default Footer
