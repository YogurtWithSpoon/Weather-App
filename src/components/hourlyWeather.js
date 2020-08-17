import React from "react";
import MiniWeather from "../components/miniWeather";
import "./hourlyWeather.css";

function hourlyWeather(props) {
  const { data } = props;
  let position = 0;

  function buttonRight() {
    const itemLength = document.querySelectorAll(".hour_weather").length;
    const itemWidth = 80;
    const addMargin = (itemLength * itemWidth) / 5;
    const maxLength = itemLength * itemWidth;
    const slider = document.querySelector(".content_slider");
    position = Math.max((position -= addMargin), -maxLength);
    slider.style.marginLeft = position + "px";
  }

  function buttonLeft() {
    const itemLength = document.querySelectorAll(".hour_weather").length;
    const itemWidth = 80;
    const addMargin = (itemLength * itemWidth) / 5;
    const slider = document.querySelector(".content_slider");
    position = Math.min((position += addMargin), 0);
    slider.style.marginLeft = position + "px";
  }

  return (
    <div className="hourly_weather">
      <button className="button left" onClick={buttonLeft}>
        <i className="fas fa-arrow-circle-left"></i>
      </button>
      <div className="content_slider">
        <div className="content">
          {data.map((item) => (
            <MiniWeather key={Math.random().toFixed(5)} weather={item} />
          ))}
        </div>
      </div>
      <button className="button right" onClick={buttonRight}>
        <i className="fas fa-arrow-circle-right"></i>
      </button>
    </div>
  );
}

export default hourlyWeather;
