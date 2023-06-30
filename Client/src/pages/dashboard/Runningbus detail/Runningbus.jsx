
import React from 'react'
import RouteIcon from '@mui/icons-material/Route';
import "./running.css"

export default function Runningbus(props) {
  return (
    <div>
    
       <div className='cardcollection3' >


<div className='card-dashbord1'>
    <div className='flex-dashboard2'>
        <div className='img-dashboard2'>
            <img src={props.img} alt="" />
        </div>
        <div className='busname-dashboard1'>
            <h2>{props.busname}</h2>

        </div>
    </div>
    <div className='route-dashboard1'>
        <div className='routeicon1' ><RouteIcon /></div>
        <div className='routeicon1'>{`${props.source}->${props.destination}`}</div>
    </div>


</div>
</div>
    </div>
  )
}
