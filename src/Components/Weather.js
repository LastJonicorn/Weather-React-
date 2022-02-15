import axios from 'axios';
import React, { useState, useEffect } from 'react';

let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
let ICON_URL = "https://openweathermap.org/img/wn/";
let API_KEY = "522f07f8a79c35ead003011abd3f160c"

export default function Weather({lat,lon}) {
    let [temp,setTemp] = useState(0);
    let [speed,setSpeed] = useState(0);
    let [direction,setDirection] = useState(0);
    let [description,setDescription] = useState("");
    let [icon,setIcon] = useState("");

    useEffect(() => {
      let address = API_URL +
      "lat=" + lat +
      "&lon=" + lon +
      "&units=metric" + 
      "&appid=" + API_KEY;
      //console.log(address);

      axios.get(address)
        .then((response) => {
            console.log(response.data);
            setTemp(response.data.main.temp);
            setSpeed(response.data.wind.speed);
            setDirection(response.data.wind.deg);
            setDescription(response.data.weather[0].description);
            setIcon(ICON_URL + response.data.weather[0].icon + "@2x.png");
        }).catch (error => {
            alert(error);
        });
    }, [])
    

  return (
    <>
        <h3>Weather at your location</h3>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s {direction} degrees</p>
        <p>{description}</p>
        <img src={icon} alt="weather icon"/>
    </>
  )
}
