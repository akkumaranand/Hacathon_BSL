import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import logoImage from "../assets/Rectangle 51.png"
import './Template.css'



// common part ko bahar nikaal diya hai jo ki signUp and login me tha 
const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn, subtitle }) => {
    return (
        <div className=' checking flex  justify-evenly  py-10  mt-6   gap-y-0 h-[620px]'>

            <div className='formtemplatehai '>
                 <div className='templateadjustment'>
                     <div className='maipagalhu flex  gap-2 justify-center'>
                        <Link to='/'>
                        <img src={logoImage} alt="logo " width={65} height={32} loading='lazy' />
                        </Link>
                        <h1 className=' title  font-semibold   '>{title}</h1>
                      </div>
                      <h1 className='subtitle '>{subtitle}</h1>
                 
                 </div>
                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }
              </div>
           

            <div className=' logindiv  relative w-11/12 max-w-[850px]   ml-10 mr-20  '>

                <img src={image} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="absolute -top-4 right-4 "
                />
            </div>



        </div>
    )
}

export default Template