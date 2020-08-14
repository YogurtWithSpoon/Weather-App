import React from "react";
import { dayConverter } from "../converter/converter";

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
    <div className="day_weather">
      <p>{days[dayConverter(dt)]}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      {props.weather.rain && <p>{props.weather.rain} мм</p>}
      <p>{Math.floor(day)} </p>
      <p>{Math.floor(night)}</p>
    </div>
  );
}
