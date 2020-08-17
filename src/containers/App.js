import React from 'react';
import CurrentWeather from '../components/currentWeather'
import HourlyWeather from '../components/hourlyWeather';
import DailyWeather from '../components/dailyweather';
import Clock from '../components/clock';
import CurrentMonth from '../components/currentMonth'

import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      daily: '',
      hourly: '',
      isLoading: false,
      lat: 59.939095,
      lon: 30.315868,
    }
    this.onChangeHanlder = this.onChangeHanlder.bind(this)
  }

  onChangeHanlder(event) {
    let data = event.target.value;
    const coords = data.split(' ')
    const [latitude, long] = coords;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${long}&%20exclude=current,daily&units=metric&lang=ru&appid=2acbadd18c62985f6e7925919ab88df9`)
      .then(response => response.json())
      .then(item => {
        this.setState({ current: item.current, daily: item.daily, hourly: item.hourly })
      })
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&%20exclude=current,daily&units=metric&lang=ru&appid=2acbadd18c62985f6e7925919ab88df9`)
      .then(response => response.json())
      .then(item => {
        this.setState({ current: item.current, daily: item.daily, hourly: item.hourly, isLoading: true })
      })
  }

  render() {
    const { isLoading } = this.state;
    
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            Прогноз погоды в 
            <select className="city_select" onChange={this.onChangeHanlder}>
              <option value="59.939095 30.315868">Санкт-Петербурге</option>
              <option value="55.753215 37.622504">Москве</option>
              <option value="45.035470 38.975313">Краснодаре</option>
              <option value="55.159897 61.402554">Челябинске</option>
            </select>
          </div>
          <div className="cards">
            {isLoading && <CurrentWeather data={this.state.current} />}
            {isLoading && <DailyWeather data={this.state.daily} />}
            <div className="today_info">
              <CurrentMonth />
              <Clock />
            </div>
          </div>
        </div>
        {isLoading && <HourlyWeather data={this.state.hourly} />}
      </div>
    );
  }
}

export default App;
