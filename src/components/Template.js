import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frameImage from '../assets/frame.png'
import {FcGoogle} from 'react-icons/fc'


export default function Template({title,dec1,dec2,image,formtype,setIsLoggedIn}) {
  return (
    <div className=" w-[1180px] m-auto flex py-12 gap-x-12 justify-evenly mt-16 " >
      <div className='space-y-6 w-11/12 max-w-[450px]'>
        <h1 className=' text-3xl font-bold ' >{title}</h1>
        <p>
          <span className=' text-richblack-100 ' >{dec1}</span>
          <br />
          <span className=' text-blue-100 italic' >{dec2}</span>
        </p>

        {formtype === 'signup'? (<SignupForm setIsLoggedIn={setIsLoggedIn} />):(<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
        
        <div className=' flex w-full gap-x-2 justify-center items-center '>
          <div className='w-full h-[1px] bg-richblack-700' ></div>
          <p className=' text-richblack-700' >OR</p>
          <div className='w-full h-[1px] bg-richblack-700' ></div>
        </div>
        
        <button className=" w-full bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 flex gap-x-2 justify-center items-center mt-6 ">
        <FcGoogle/> 
        Sign Up with Google
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px] mt-8 '>
        <img src={frameImage}
          alt='pattern' width={558} height={504} loading='lazy' 
        /> 
        <img src={image} className=' absolute -top-4 right-4'
          alt='pattern' width={558} height={504} loading='lazy' 
        /> 

      </div>
    </div>
  )
}
