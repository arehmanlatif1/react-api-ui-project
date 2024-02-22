import React from 'react'
import './WeatherApp.css'

import search_icon from "./icons/search.png"
import clear_icon from "./icons/clear.png"
import cloud_icon from "./icons/cloud.png"
import drizzle_icon from "./icons/drizzle.png"
import humidity_icon from "./icons/humidity.png"
import rain_icon from "./icons/rain.png"
import snow_icon from "./icons/snow.png"
import wind_icon from "./icons/wind.png"



function WeatherApp() {

    let api_key = "08b8bcb043f87d6a013fd6efe6738296"; 

    const search = () => {
        const element = document.getElementsByClassName("cityInput")

    }


  return (
    <div className='container'>
        <div className="top-bar">
            <input type='text' className="cityInput" placeholder='Search' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-img">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°F</div>
        <div className="weather-location">New York</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">18km/h</div>
                    <div className="text"> Wind Speed</div>
                </div>
                </div>
                </div>
                </div>
  ) 
}

export default WeatherApp