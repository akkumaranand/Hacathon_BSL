import React ,{ useEffect } from "react";

import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

const chas = [23.6362, 86.1828];
const dhanbad = [23.7957, 86.4304];
const chandrapura = [23.74877, 86.11955];
const jharia = [23.7426,86.4111];
const sindri = [23.6546, 86.4737];

L.Marker.prototype.options.icon = L.icon({
    iconUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

let DefaultIcon = L.icon({
    iconUrl: "/bus-gif.gif",
    iconSize: [90, 90],
});

export default function Routing(props) {
    const map = useMap();
    const [source, setSource] = React.useState(props.source)
    const [destination, setDestination] = React.useState(props.destination)

    useEffect(() => {
        if (!map) return;

     
        const marker1 = L.marker([22.8046, 86.2029], {
            icon: DefaultIcon
        }).addTo(map);
        const routingControl1 = L.Routing.control({
            waypoints: [
                L.latLng(chas),   
                L.latLng(sindri)  
            ],lineOptions: {
                styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
              },
            routeWhileDragging: false
        }).on("routesfound", function (e) {
            e.routes[0].coordinates.forEach((c, i) => {
                setTimeout(() => {
                    marker1.setLatLng([c.lat, c.lng]);
                }, 1000 * i);
            });
            console.log(e);
        }).addTo(map);


        { console.log(destination) }
        { console.log("hello") }
        { console.log(source) }


       
        const marker2 = L.marker([22.8046, 86.2029], {
          icon: DefaultIcon
        }).addTo(map);
        const routingControl2 = L.Routing.control({
          waypoints: [
            L.latLng(props.source),     
            L.latLng(props.destination)   
          ], lineOptions: {
            styles: [{ color: 'red', opacity: 0.6, weight: 4 }]
          },
          routeWhileDragging: false
        }).on("routesfound", function (e) {
          e.routes[0].coordinates.forEach((c, i) => {
            setTimeout(() => {
              marker2.setLatLng([c.lat, c.lng]);
            }, 1000 * i);
          });
          console.log(e);
        }).addTo(map);

       
        const marker3 = L.marker([22.8046, 86.2029], {
            icon: DefaultIcon
        }).addTo(map);
        const routingControl3 = L.Routing.control({
            waypoints: [
                L.latLng(chandrapura), 
                L.latLng(dhanbad)      
            ],lineOptions: {
                styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
              },
            routeWhileDragging: false
        }).on("routesfound", function (e) {
            e.routes[0].coordinates.forEach((c, i) => {
                setTimeout(() => {
                    marker3.setLatLng([c.lat, c.lng]);
                }, 1000 * i);
            });
            console.log(e);
        }).addTo(map);

        return () => {
            map.removeControl(routingControl1);
              map.removeControl(routingControl2);
            map.removeControl(routingControl3);
        };
    }, [map]);

    return null;
}
