import React, { useState } from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Barchat from '../../components/Barchat'
import Piachart from '../../components/Piachart'
import BusdetailCard from './BusdetailCard'
import Busdriver from './Busdriver'
import Runningbus from './Runningbus detail/Runningbus'

import Mapdashboard from './Mapdashboard'

const Carddashboard = () => {
  const [bool, setbool] = useState(true)
  const [img, setImg] = useState(null)
  const [busname, setBusname] = useState(null)
  const [source, setSource] = useState(null)
  const [destination, setDestination] = useState(null)
  const [scordinate,setScordinate ] = useState([85.99106894165021, 23.699127949999998])
  const [dcordinate,setDcordinate ] = useState([86.1828,23.6362])
  
  const handleClick1 = (e) => {
    // console.log(e)
    if (e) {
      setbool(prev => !prev)
      setImg(e.img)
      setBusname(e.name)
      setSource(e.source)
      setDestination(e.destination)
      console.log(e)
    }

   
  }
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










            {bool ? <><div className='cardcollection'>
              <h1 className='cardcollection1-h1'>REGISTERED BUSES </h1>

              <BusdetailCard callback={handleClick1}
                img={"https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/248777908_4819032761440607_2069930435757190140_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4cDR13s5Z34AX_Uke7G&_nc_ht=scontent.fpat3-2.fna&oh=00_AfBwIJt530jFLnNQOsbwAM0lVpXMHvWC4bB4Bz7wFrn-iw&oe=648DA24D"} busname={"ATT KING"} source={"CHAS"} destination={"BOKARO"} />
              <BusdetailCard callback={handleClick1}
                img={"https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/313349887_579796167281681_8523947984404471511_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x85OrJ8wu4UAX_ED-zl&_nc_ht=scontent.fpat3-1.fna&oh=00_AfCpzMFgRCUWIpyXYke8eveLZ-YgFOY1M6G9e_H5aXvLVw&oe=648D50CF"} busname={"SHIV SHAKTI"} source={"BOKARO"} destination={"DHANBAD"} />
              <BusdetailCard callback={handleClick1}
                img={"https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/273331861_5180484335295446_1109925790987439584_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RF6Z8b-Ecw0AX9aim1m&_nc_ht=scontent.fpat3-3.fna&oh=00_AfBlotB8tGvaBEeLM1K0LaFj_lWyseAmBW_QXpH3j1BEUg&oe=648E37B7"} busname={"SRS TRAVEL"} source={"CHAS"} destination={"SINDRI"} />
              <BusdetailCard callback={handleClick1}
                img={"https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/313349887_579796167281681_8523947984404471511_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x85OrJ8wu4UAX_ED-zl&_nc_ht=scontent.fpat3-1.fna&oh=00_AfCpzMFgRCUWIpyXYke8eveLZ-YgFOY1M6G9e_H5aXvLVw&oe=648D50CF"} busname={"VRL TRAVELS "} source={"CHAS"} destination={"RAM NAGAR COLONY"} />
              <BusdetailCard callback={handleClick1}
                img={"https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/248777908_4819032761440607_2069930435757190140_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4cDR13s5Z34AX_Uke7G&_nc_ht=scontent.fpat3-2.fna&oh=00_AfBwIJt530jFLnNQOsbwAM0lVpXMHvWC4bB4Bz7wFrn-iw&oe=648DA24D"} busname={"ASHOK LEYLAND"} source={"BOKARO"} destination={"SECTOR 4"} />
              <BusdetailCard callback={handleClick1}
                img={"https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/273331861_5180484335295446_1109925790987439584_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RF6Z8b-Ecw0AX9aim1m&_nc_ht=scontent.fpat3-3.fna&oh=00_AfBlotB8tGvaBEeLM1K0LaFj_lWyseAmBW_QXpH3j1BEUg&oe=648E37B7"} busname={"ATT KING"} source={"CHAS"} destination={"SECTOR 2"} />

            </div> </> :
              <div><Busdriver
                busname={busname}
                img={img}
                source={source}
                destination={destination}
              />
                <button onClick={() => setbool(prev => !prev)}>close</button></div>}












            <div className='cardcollect'>
              <Barchat className='chatcss' />
              
            </div>
          </div>
          <div className='rightdiv-dashboard'>
            <div className='dashboardmap'>
            <Mapdashboard  scordinate={scordinate} dcordinate={dcordinate}/>
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

export default Carddashboard