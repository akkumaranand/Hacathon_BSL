import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import React from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "./map.css"
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import Routing from "./Routing";
// import Routing from "./Routing";

const position = [23.6693, 86.1511];
const position1 = [23.7470, 86.1187];
const position2 = [23.6362, 86.1828];
const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [15, 25],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});
const markerIcon = new L.Icon({
    iconUrl: "https://www.pngall.com/wp-content/uploads/13/Taxi-Yellow-PNG-Images.png",
    iconSize: [35, 25],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});

const busIcon = L.icon({
    iconUrl: "/bus.svg",
    iconSize: [35, 25],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});

const markers = [
    { position: position1, location: "Location 1" },
    { position: [23.3441, 85.3096], location: "Location 2" },
    { position: position2, location: "Location 3" },

];

export default function Map(props) {
    //   const[source,setSource]=React.useState([props.scordinate[0],props.scordinate[1]])
    //   const[destination,setDestination]=React.useState([props.dcordinate[0],props.dcordinate[1]])
    const [mapexpand, setMapexpand] = React.useState(false)

    const handleClick = () => {
        setMapexpand(prev => !prev)
    }
    return (
        <div className="map-conatiner">
            <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    <Marker position={position} icon={busIcon}>
                        <Popup>Bus Location</Popup>
                    </Marker>
                }
               


                <Circle center={position} radius={25000} />
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        icon={markerIcon}
                    >
                        <Popup>{marker.location}</Popup>
                    </Marker>
                ))}

                
                <Routing source={props.source}  destination={props.destination}/>
            </MapContainer>
           

        </div>
    );
}
