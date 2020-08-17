import React from "react";
import { dayConverter } from "../converter/converter";
import './middleWeather.css';

export default function MiddleWeather(props) {
  const { dt } = props.weather;
  const { day, night } = props.weather.temp;
  const icon = props.weather.weather[0].icon;
  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  return (
    <React.Fragment>
      <div className="day_weather">
        <p className="day_name">{days[dayConverter(dt)]}</p>
        <div className="day_status">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
        <p className="day_temp">{Math.floor(day)} </p>
        <p className="day_temp">{Math.floor(night)}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}
