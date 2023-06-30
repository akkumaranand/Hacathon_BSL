import React ,{useState} from 'react'
import "./BusdetailCard.css"
import RouteIcon from '@mui/icons-material/Route';



export default function BusdetailCard(props) {
         const[bool,setbool]=useState(true)
    const handleClick=(e)=>{
        // console.log(e)
        props.callback(e);
        setbool(prev=>!prev)
    }
    return (
<>
        <div className='cardcollection1'  onClick={()=>handleClick(
            {name:props.busname,
             source :props.source,
             destination:props.destination,
             img:props.img})}>
           
           
                <div className='card-dashbord'>
                <div className='flex-dashboard'>
                    <div className='img-dashboard'>
                        <img src={props.img} alt="" />
                    </div>
                    <div className='busname-dashboard'>
                        <h2>{props.busname}</h2>

                    </div>
                </div>
                <div className='route-dashboard'>
                    <div><RouteIcon /></div>
                    <div className='routeicon'>{`${props.source}->${props.destination}`}</div>
                </div>


            </div>
        </div>
        
        </>
    )
}
