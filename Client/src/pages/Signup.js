import React from 'react'
import signupImg from "../assets/Rectangle.svg"
import Template from '../components/Template'



const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="NETWORK"
    subtitle="Join with bus service"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup