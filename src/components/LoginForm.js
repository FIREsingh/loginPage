import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }
  function clickHandler() {
    setShowPassword((pre) => !pre);
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("logged In");
    console.log("Priting login form data")
    console.log(formData)
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}>
      <label>
        <p className=" text-[0.875rem]  text-richblack-5 mb-1 leading-[1.345rem] ">
          Email Address <sup>*</sup>
        </p>
        <input
          className=" w-full bg-richblack-800 rounded-[0.5rem] p-[8px] "
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>

      <label className="w-full relative ">
        <p className=" text-[0.875rem]  text-richblack-5 mb-1 leading-[1.345rem] mt-3">
          Password <sup>*</sup>
        </p>
        <input
          className=" w-full bg-richblack-800 rounded-[0.5rem] p-[8px]"
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="password"
          name="password"
        />

        <span className=" absolute top-[65px] right-3" onClick={clickHandler}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>

        <Link to="#">
          <p className=" text-xs mt-1 text-blue-100 ml-auto max-w-max ">
            forget password
          </p>
        </Link>
      </label>

      <button className=" w-full px-[12px] py-[8px] bg-yellow-50  rounded-[8px] text-richblack-900 font-medium mt-5 ">
        Sign In
      </button>
    </form>
  );
}
