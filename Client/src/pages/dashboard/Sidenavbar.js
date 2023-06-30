import React from 'react'
// import logo from ".../assets/Rectangle 51.png"
import {  Link } from 'react-router-dom'
import './Sidenavbar.css'
import { RiAdminLine } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { BsFillChatFill } from "react-icons/bs";
import logoi from "../../assets/Ellipse3.png"




const Sidenavbar = () => {
    return (
        <div className='bg-rich-black-2 ' >
           

       

       
        <div className='Sidebar'>
            

            <nav className='dashboardbtns'>
                <Link to="/login">
                    <img src={logoi} alt="logo " width={65} height={32} loading='lazy' />
                    <Link className='text-black iconfff' to="/services" >Login</Link>
                </Link>
                <ul className='icondivdashboard' >
                    <li >
                        <Link  to="/dashboard/Admin" > <RiAdminLine className='iconff' />   </Link>
                    </li>
                    <li>
                        <Link  to="/dashboard/expense"> <GiTwoCoins className='iconff' /> </Link>
                    </li>
                    <li>
                        <Link  to="/dashboard/chat" ><BsFillChatFill className='iconf' /></Link>
                    </li>
                    <li>
                        <Link  to="/dashboard/form" ><AiOutlineFileAdd className='iconff' /></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className='text-richblack-900 ' to="/" > <IoArrowBack className='iconff' /> </Link>
                        <Link className='text-richblack-900 iconfff' to="/" > Back</Link>
                    </li>
                </ul>
            </nav>
            



        </div>



        </div>  
    )
}

export default Sidenavbar