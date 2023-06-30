import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashBoad from "./pages/DashBoad";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import MaybeShowNav from "./components/maybeshownav/MaybeShowNav";
import Services from "./pages/service/Services";

import Carddashboard from "./pages/dashboard/Carddashboard";
import { Layout } from "./pages/dashboard/Layout";
import Expense from "./pages/dashboard/Expense";
import Chatdashboard from "./pages/dashboard/Chatdashboard";
import Sidenavbar from "./pages/dashboard/Sidenavbar";
import Mayshowsidebar from "./components/maybeshownav/Mayshowsidebar";








function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (



    <div className="appjs w-screen h-screen bg-richblack-900 flex flex-col" >

    
          <div className="w-screen h-screen bg-richblack-900 flex flex-col" >

     
               <MaybeShowNav>
                  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
               </MaybeShowNav>
                <Mayshowsidebar>
                  <Sidenavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
               </Mayshowsidebar>
        

                 <Routes>
                    <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
                    <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/services" element={<Services setIsLoggedIn={setIsLoggedIn} />} />
                     <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
                     <Route path="/dashboard" element={
                     <PrivateRoute isLoggedIn={isLoggedIn}>
                       <DashBoad />
                     </PrivateRoute>}  />

                  

                    <Route path="/dashboard/Admin" element={
                      <PrivateRoute isLoggedIn={isLoggedIn}>
                      <Carddashboard />
                       </PrivateRoute>} >
                    </Route>

                   <Route path="/dashboard/Admin" element={
                     <PrivateRoute isLoggedIn={isLoggedIn}>
                       <Carddashboard />
                     </PrivateRoute>} >
                   </Route>

                 <Route path="/dashboard/expense" element={
                   <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Expense/>
                    </PrivateRoute> } >
                  </Route>
                   <Route path="/dashboard/chat" element={
                     <PrivateRoute isLoggedIn={isLoggedIn}>
                <Chatdashboard/>
                  </PrivateRoute> } >
                  </Route>
                 <Route path="/dashboard/form" element={
                   <PrivateRoute isLoggedIn={isLoggedIn}>
                       <Layout/>
                      </PrivateRoute> } >
                 </Route>
        
         </Routes>
      

      </div> 
     
    </div>


  )
};

export default App;
