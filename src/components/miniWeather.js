import React from 'react';
import {timeConverter} from '../converter/converter';
import './miniWeather.css';

const miniWeather = (props) => {
  const {dt,temp} = props.weather; 
  const icon = props.weather.weather[0].icon
  return(
  <div className="hour_weather">
    <p className="hour">{timeConverter(dt)}</p>
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
    <p className="hour_degree">{Math.floor(temp)} &deg;C</p>
  </div>
  )
}

export default miniWeather;