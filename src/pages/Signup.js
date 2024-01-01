import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/login.png'

export default function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      dec1="Build skill for today tomorrow and beond."
      dec2='Education to feature-proof your career'
      image={signupImg}
      formtype='signup'
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
