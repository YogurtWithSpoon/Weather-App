import React from "react";
import { timeConverter, pressureConverter, windConverter } from "../converter/converter";

const currentWeather = (props) => {
  const { data } = props;

  return (
    <div>
      <p>Температура на улице {Math.round(data.temp)} &#8451;</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="current weather icon"
      />
      <p>{data.weather[0].description}</p>
      {data.rain ? <p>{data.rain} мм</p> : null}
      {data.snow ? <p>{data.snow} мм</p> : null}
      <p>Ощущается как {Math.round(data.feels_like)} &#8451;</p>
      <p>Ветер {windConverter(Number(data.wind_deg))} {data.wind_speed} м/с</p>
      <p>Облачность {data.clouds} %</p>
      <p>Влажность {data.humidity} %</p>
      <p>Давление {pressureConverter(data.pressure)} мм. рт. ст.</p>
      <p>Восход {timeConverter(data.sunrise)}</p>
      <p>Закат {timeConverter(data.sunset)}</p>
      <p></p>
    </div>
  );
};

export default currentWeather;
