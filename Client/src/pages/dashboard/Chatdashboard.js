import React from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Nav from './Chatdashboard/Nav/Nav'
import ChatBody from './Chatdashboard/chatbody/Chatbody'
import Mapdashboard from './Mapdashboard'


import "./Sidenavbar.css"
const Chatdashboard = () => {
    const [scordinate,setScordinate ] = React.useState([85.99106894165021, 23.699127949999998])
    const [dcordinate,setDcordinate ] = React.useState([86.1828,23.6362])
    
    return (
        <div className=' dashboard flex justify-center items-center  bg-richblack-2 text-3xl h-full ' >
            <div className='background-dashboard'>
                <div className='maindiv'>
                    <div className='leftdiv-dashboard'>

                        <div className='Heading-dashboard'>Dashboard</div>

                        <div className='illustrator-bgtop'></div>

                        <img src={sittingillustrator} alt="sitting"

                            className="sittingillustrator "
                        />

                        <div className="dashboardForm">
                            <Nav />
                            <ChatBody />
                        </div>





                    </div>
                    <div className='rightdiv-dashboard'>
                        <div className='dashboardmap'>
                        <Mapdashboard  scordinate={scordinate} dcordinate={dcordinate}/>
                        </div>
                        <div className='dashboardmap'>
                            {/* <Piachart /> */}
                            Bar chat
                        </div>


                        <img className='btillustrator' src={btillustrator} alt="sitting"


                        />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Chatdashboard