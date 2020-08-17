import React from 'react';
import MiddleWeather from '../components/middleWeather';
import './dailyweather.css'
const dailyWeather = props => {
  return (
    <div className="daily_weather">
      {props.data.map(item => <MiddleWeather key={Math.random().toFixed(4)} weather = {item} />)}
    </div>
  )
}

export default dailyWeather;