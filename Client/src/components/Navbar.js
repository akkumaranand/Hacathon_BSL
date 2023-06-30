import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import logo from "../assets/Rectangle 51.png"
import { toast } from 'react-hot-toast';
import './Navbar.css'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12  py-4 mx-auto navbar' >
        <Link to="/">
            <img src={logo} alt= "logo " width={65} height={32} loading='lazy'/>
        </Link>
        <nav>
            <ul className=' flex   w-96 justify-between   mt-3  text-richback-2 ' >
                <li >
                  <NavLink className='text-blue-200 ' to ="/" >Home</NavLink>
                </li>
                <li>
                   <NavLink className='text-blue-200 ' to="/about">About</NavLink>
                </li>
                <li>
                   <NavLink className='text-blue-200' to ="/services" >Services</NavLink>
                </li>
            </ul>
        </nav>

        {/* login -sinup - logout - Dashboard */}
        <div className='  flex items-center gap-x-4'>

            {/* jab login user nahi hoga  */}

            { !isLoggedIn &&
            <NavLink to="/login">
                <button className='text-blue-200  py-[8px] px-[12px] rounded-[8px]  border-richblack-700'>Log in</button>
               
            </NavLink>
            }

            {/* ye statar pack me sara chiz already dala hua tha like toast and tailwind ka  */}


            { !isLoggedIn &&
            <NavLink to="/signup">
            <button className='  text-blue-200  py-[8px] px-[12px] rounded-[8px]  border-richblack-700'>
            Sign Up
            </button>
            </NavLink>
            }

            {/* Jab login user hoga  */}
            { isLoggedIn &&
            <Link to="/">
            <button className=' text-blue-200  py-[8px] px-[12px] rounded-[8px]  border-richblack-700' onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged out");
            }}>
            Log Out
            </button>
            </Link>
            }


            <div>
                
            </div>
            { isLoggedIn &&
            <Link to="/dashboard/Admin">
                <button className=' text-blue-200   py-[20px] px-[12px] rounded-[8px]  border-richblack-700'>DashBoad</button>
            </Link>
            }
            
        </div>



    </div>
  )
}

export default Navbar