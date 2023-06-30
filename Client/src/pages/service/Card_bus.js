import React, { useRef } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';
import Booking from './Booking';





export default function Card_bus(props) {
    const [verify, setVerify] = React.useState(true)
    const [busName, setbusName] = React.useState(null)
    const handleClick = (e) => {
        setVerify(prev => !prev)
        setbusName(e)

    }
    return (
        <>{verify ? <>
            <h1 className='heading-service'>Result Found</h1>
            <div className='wrap-service'>


                <div className='Card_bus'>
                    <div className="busName">
                        <h2>AAT KINGS</h2>
                        <div className="time">
                            9:45 AM

                        </div>
                    </div>
                    <div className="card_bus_detail">
                        <div className="Card_bus_travel">
                            <div className="source">
                                <div className="icon"><NearMeIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.source}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                            <div className="destination">
                                <div className="icon">< LocationOnIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.destination}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <button onClick={() => handleClick("AAT KINGS")}>BOOK NOW</button>
                        </div>
                    </div>
                </div>


                <div className='Card_bus'>


                    <div className="busName">
                        <h2>SRS TRAVEL</h2>
                        <div className="time">
                            10:45 AM

                        </div>
                    </div>
                    <div className="card_bus_detail">



                        <div className="Card_bus_travel">
                            <div className="source">
                                <div className="icon"><NearMeIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.source}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                            <div className="destination">
                                <div className="icon">< LocationOnIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.destination}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                        </div>




                        <div className="button">
                            <button onClick={() => handleClick("SRS TRAVEL")}>BOOK NOW</button>
                        </div>




                    </div>





                </div>
                <div className='Card_bus'>


                    <div className="busName">
                        <h2>ASHOK LEYLAND</h2>
                        <div className="time">
                            11:45 AM

                        </div>
                    </div>
                    <div className="card_bus_detail">



                        <div className="Card_bus_travel">
                            <div className="source">
                                <div className="icon"><NearMeIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.source}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                            <div className="destination">
                                <div className="icon">< LocationOnIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.destination}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                        </div>




                        <div className="button">
                            <button onClick={() => handleClick("ASHOK LEYLAND")}>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div className='Card_bus'>


                    <div className="busName">
                        <h2>VRL TRAVELS </h2>
                        <div className="time">
                            9:45 AM

                        </div>
                    </div>
                    <div className="card_bus_detail">
                        <div className="Card_bus_travel">
                            <div className="source">
                                <div className="icon"><NearMeIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.source}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                            <div className="destination">
                                <div className="icon">< LocationOnIcon /></div>
                                <div className="detail">
                                    <p><h1>{props.destination}</h1>15-Dec-2020 </p>
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <button onClick={() => handleClick("VRL TRAVELS")}>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </> :
            <div>
                {console.log(props.scordinate, props.dcordinate)}
                <Booking busname={busName} source={props.source} destination={props.destination}
                    scordinate={props.scordinate} dcordinate={props.dcordinate} />
            </div>}

        </>
    )
}

