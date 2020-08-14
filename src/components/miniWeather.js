import React from 'react';
import {timeConverter} from '../converter/converter';

const miniWeather = (props) => {
  const {dt,temp} = props.weather; 
  const icon = props.weather.weather[0].icon
  return(
  <div className="hour_weather">
    <p>{timeConverter(dt)}</p>
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
    <p>{Math.floor(temp)}  &#8451;</p>
  </div>
  )
}

export default miniWeather;