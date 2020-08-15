import React from 'react';
import MiniWeather from '../components/miniWeather';
import './hourlyWeather.css'

function hourlyWeather(props){
  const {data} = props;
  return (
    <div className="hourly_weather">
    {data.map(item => <MiniWeather key={Math.random().toFixed(5)} weather={item}/>)}
    </div>
  )
}

export default hourlyWeather;