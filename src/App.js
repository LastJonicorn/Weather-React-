import './App.css';
import { useState,useEffect } from 'react';
import Weather from './Components/Weather';

function App() {
  let [lat,setLat] = useState(0);
  let [lng,setLng] = useState(0);
  let [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      },(error) => {
        alert(error);
      })
    } else {
      alert("Your browser does not support geolocation!")
    }
  }, [])
  
  if (isLoading) {
    return <div><p>Loading...</p></div>
  } else {
    return (
      <div>
        <h3>Your position is:</h3>
        <p>Latitude: {lat.toFixed(3)} <br/> Longitude: {lng.toFixed(3)}</p>
        <Weather lat={lat} lon={lng}/>
      </div>
    );
  }
}

export default App;
