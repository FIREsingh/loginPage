import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function SignupForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("student");

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
    if (formData.password != formData.confirmPassword) {
      toast.error("password is not matching.");
    } else {
      toast.success("Account has created Please login");
      navigate("/login");

      setFormData((pre) => ({
        ...pre,
        [event.target.name]: event.target.value,
      }));

      const finalData = {
        ...formData, accountType
      }
      console.log(finalData);
    }
  }

  return (
    <div>
      <div className="flex p-1 my-6 bg-richblack-800 rounded-full gap-x-1 max-w-max">
        <button
          className={`${
            accountType === "student"
              ? " bg-richblack-900 text-richblack-5 "
              : " bg-transparent text-richblack-200  "
          }py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>

        <button
          className={`${
            accountType === "instructor"
              ? " bg-richblack-900 text-richblack-5 "
              : " bg-transparent text-richblack-200  "
          }py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first and last name */}
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className=" text-[0.875rem]  text-richblack-5 mb-1 leading-[1.345rem] ">
              First Name <sup>*</sup>{" "}
            </p>
            <input
              className=" w-full bg-richblack-800 rounded-[0.5rem] p-[8px]"
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label className="w-full">
            <p className=" text-[0.875rem]  text-richblack-5 mb-1 leading-[1.345rem] ">
              Last Name <sup>*</sup>{" "}
            </p>
            <input
              className=" w-full bg-richblack-800 rounded-[0.5rem] p-[8px]"
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* email */}
        <label>
          <p className=" text-[0.875rem]  text-richblack-5 mb-1 leading-[1.345rem] mt-3">
            Email Address <sup>*</sup>
          </p>
          <input
            className=" w-full bg-richblack-800 rounded-[0.5rem] p-[8px]"
            type="text"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>
        {/* password and confirm password */}
        <div className=" flex justify-between gap-x-4 mt-3">
          <label className="w-full relative">
            <p className=" text-[0.875rem]  text-richblack-5 mb-1 leading-[1.345rem] ">
              Password <sup>*</sup>
            </p>
            <input
              className=" w-full bg-richblack-800 rounded-[0.5rem] p-[8px]"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={changeHandler}
            />
            <span
              onClick={clickHandler}
              className=" absolute top-[40px] right-3"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          <label className="relative w-full">
            <p className=" text-[0.875rem]  text-richblack-5 mb-1 leading-[1.345rem] ">
              confirm password <sup>*</sup>
            </p>
            <input
              className=" w-full bg-richblack-800 rounded-[0.5rem] p-[8px]"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={changeHandler}
            />
            <span
              onClick={clickHandler}
              className=" absolute top-[40px] right-3"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>
        </div>
        <button className=" w-full px-[12px] py-[8px] bg-yellow-50  rounded-[8px] text-richblack-900 font-medium mt-5 ">
          Create Account
        </button>
      </form>
    </div>
  );
}
