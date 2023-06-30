import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/Rectangle.svg"
import logoImg from "../assets/Rectangle.svg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Network"
    logo = {logoImg}
    subtitle="Login into your account"
    image={loginImg}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}

    
    />
  )
}

export default Login