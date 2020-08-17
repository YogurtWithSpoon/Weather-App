import React from "react";
import {
  timeConverter,
  pressureConverter,
  windConverter,
} from "../converter/converter";
import "./currentWeather.css";
const currentWeather = (props) => {
  const { data } = props;

  return (
    <div className="current_weather">
      <div className="main_info">
        <p className="current_temp">
          <div className="number_celsius">{Math.round(data.temp)}</div>
          <div className="celsius">&deg;C</div>
        </p>
        <p className="current_feelslike">
          Ощущается как {Math.round(data.feels_like)} &deg;C
        </p>
        <img
          className="main_info_icon"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="current weather icon"
        />
        <p className="current_disc">
          {data.weather[0].description.slice(0, 1).toUpperCase() +
            data.weather[0].description.slice(1)}
        </p>
      </div>
      <hr />
      <div className="add_info">
        {data.rain ? <p>{data.rain} мм</p> : null}
        {data.snow ? <p>{data.snow} мм</p> : null}
        <div className="add_info_section">
          <i class="add_icon fas fa-cloud"></i>
          <p className="add_info_desc">Облачность</p>
          <p className="add_info_number">{data.clouds}</p>
          <p className="add_info_units">%</p>
        </div>
        <div className="add_info_section">
          <i class="add_icon fas fa-wind"></i>
          <p className="add_info_desc">
            Ветер {windConverter(Number(data.wind_deg))}
          </p>
          <p className="add_info_number">{data.wind_speed}</p>
          <p className="add_info_units">м/с</p>
        </div>
        <div className="add_info_section">
          <i class="add_icon fas fa-tint"></i>
          <p className="add_info_desc">Влажность</p>
          <p className="add_info_number">{data.humidity}</p>
          <p className="add_info_units">%</p>
        </div>
        <div className="add_info_section">
          <i class="add_icon fas fa-thermometer-half"></i>
          <p className="add_info_desc">Давление </p>
          <p className="add_info_number">{pressureConverter(data.pressure)}</p>
          <p className="add_info_units">мм. рт. ст.</p>
        </div>
        <div className="add_info_section">
          <i class="add_icon_sun fas fa-long-arrow-alt-up"></i>
          <p className="add_info_sun">Восход </p>
          <p className="add_info_number_sun">{timeConverter(data.sunrise)}</p>
        </div>
        <div className="add_info_section">
          <i class="add_icon_sun fas fa-long-arrow-alt-down"></i>
          <p className="add_info_sun">Закат</p>
          <p className="add_info_number_sun"> {timeConverter(data.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default currentWeather;
