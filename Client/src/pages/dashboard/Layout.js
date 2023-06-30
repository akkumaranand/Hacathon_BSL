import React from 'react'
// import Dashboardform from './Dashboardform'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Dashboardform from "../../pages/dashboard/Dashboardform"
import Mapdashboard from './Mapdashboard'
import Runningbus from './Runningbus detail/Runningbus'



export const Layout = () => {
    const [scordinate, setScordinate] = React.useState([85.99106894165021, 23.699127949999998])
    const [dcordinate, setDcordinate] = React.useState([86.1828, 23.6362])

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
                        <Dashboardform />
                    </div>
                    <div className='rightdiv-dashboard'>
                        <div className='dashboardmap'>
                            <Mapdashboard scordinate={scordinate} dcordinate={dcordinate} />
                        </div>
                        <div className='runningbus'>
                            <Runningbus
                                img={"https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/273331861_5180484335295446_1109925790987439584_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RF6Z8b-Ecw0AX9aim1m&_nc_ht=scontent.fpat3-3.fna&oh=00_AfBlotB8tGvaBEeLM1K0LaFj_lWyseAmBW_QXpH3j1BEUg&oe=648E37B7"} busname={"ATT KING"} source={"CHAS"} destination={"SECTOR 2"} />
                        </div>
                        <div className='runningbus'>
                        <Runningbus
                img={"https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/248777908_4819032761440607_2069930435757190140_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4cDR13s5Z34AX_Uke7G&_nc_ht=scontent.fpat3-2.fna&oh=00_AfBwIJt530jFLnNQOsbwAM0lVpXMHvWC4bB4Bz7wFrn-iw&oe=648DA24D"} busname={"SRS"} source={"CHAS"} destination={"SINDRI"} />
                        </div>

                        <img className='btillustrator' src={btillustrator} alt="sitting"


                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
