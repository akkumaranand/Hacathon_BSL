import React from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
// import Piachart from '../../components/Piachart'
// import Areachat from '../../components/Areachat'
import Graph from './Graph'
import Graph1 from './Graph1'
import Barchat from '../../components/Barchat'

const Expense = () => {
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
                        <div className='cardcollection'>
                        <Graph/>  
                        </div>
                        <div className='cardcollect'>
                          <Barchat/>
                        </div>

                    </div>
                    <div className='rightdiv-dashboard'>
                        <div className='dashboardmap'>
                           <Graph1/>
                        </div>
                       


                        <img className='btillustrator' src={btillustrator} alt="sitting"


                        />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Expense