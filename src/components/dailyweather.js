import React from 'react';
import MiddleWeather from '../components/middleWeather';
import './dailyweather.css'
const dailyWeather = props => {
  return (
    <div className="daily_weather">
      <div className="daily_header">
        <p>День</p>
        <p>Днём</p>
        <p>Ночью</p>
      </div>
      <hr />
      {props.data.map(item => <MiddleWeather key={Math.random().toFixed(4)} weather = {item} />)}
    </div>
  )
}

export default dailyWeather;