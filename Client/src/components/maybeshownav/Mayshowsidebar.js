import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Mayshowsidebar = ({children}) => {
    const location = useLocation();
    const[Showsidebar , setSidenavbar] = useState(false);

    useEffect(()=>{
        console.log('This is location:' , location);
        if (location.pathname === '/dashboard/Admin' || location.pathname === '/dashboard/expense' || location.pathname === '/dashboard/chat' || location.pathname === '/dashboard/form' || location.pathname === '/dashboard') {
           setSidenavbar(true);
        }
        else
        {
           setSidenavbar(false)
        }
    },[location])
   console.log(Showsidebar);
  return (
    <div>{Showsidebar && children} </div>
  )
}

export default Mayshowsidebar