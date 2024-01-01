import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

export default function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly text-xl m-4 w-[1200px] mx-auto ">

      <Link to="/">
        <img src={logo} />
      </Link>
      
        <ul  className=" flex flex-row gap-7 items-center text-white font-bold ">
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      

      <div className="flex ml-5 mr-3 gap-3" >
      {
      !isLoggedIn && <Link to ='/login'>
        <button className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" > Log in </button>
      </Link>
      }
      {
        !isLoggedIn && <Link to = '/signup'>
        <button className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" > Signup </button>
      </Link>
      }
      {
        isLoggedIn && <Link to = '/'>
        <button onClick={()=> {
          setIsLoggedIn(false)
          toast.success('logged out')
        }} className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" > Logout </button>
      </Link>
      }
      {
        isLoggedIn && <Link to = '/dashboard'>
      <button className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" > Dashboard </button>
      </Link>
      } 
      </div>
    </div>
  );
}
