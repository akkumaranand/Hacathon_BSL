import React from 'react'
import "./BusdetailCard.css"
export default function Busdriver(props) {
    return (
        <div className='cardcollection2'>
            <div className='image'>
                <img src={props.img}></img>
                <div className='route-busdriver'>

                    <div className="route-busdriver-path">
                        <p className='from-route'>{`FROM:- ${props.source}`}</p>
                        <p>{`TO:- ${props.destination}`}</p>
                    </div>
                </div>
            </div>



            <div className='detail-busdriver'>
                <h2>{props.busname}</h2>
                
                <div className='information-busdriver'>

                    <p >BUS PLATE NO :-</p>
                    <p className='information-value'>JH-09-AM1981</p>
                </div>
                <div className='information-busdriver'>
                    <p >BUS OWNER NAME::-</p>
                    <p className='information-value'>ANAND KESHRI</p>
                </div>
                <div className='information-busdriver'>
                    <p >BUS OWNER PHONE NO  :-</p>
                    <p className='information-value'>8340283015</p>
                </div>
                <div className='information-busdriver'>
                    <p >DRIVER NAME:-</p>
                    <p className='information-value'>ANAND KESHRI</p>
                </div>
                <div className='information-busdriver'>
                    <p >TOTAL  CAPACITY:-:-</p>
                    <p className='information-value'>231</p>
                </div>
                <div className='information-busdriver'>
                    <p >STATUS :-</p>
                    <p className='information-value'>NOT RUNNING</p>
                </div>
            </div>
        </div>
    )
}
