import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

export default function Login({setIsLoggedIn}) {
  return (
    <Template
      title="Welcome Back"
      dec1="Build skill for today tomorrow and beond."
      dec2='Education to feature-proof your career'
      image={loginImg}
      formtype='login'
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
