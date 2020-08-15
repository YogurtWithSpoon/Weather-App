import React from 'react';
import CurrentWeather from '../components/currentWeather'
import HourlyWeather from '../components/hourlyWeather';
import DailyWeather from '../components/dailyweather';

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
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    }
    this.onChangeHanlder = this.onChangeHanlder.bind(this)
    this.time = this.time.bind(this);
  }

  currentMonth() {
    let months = [
      "Января",
      "Ферваля",
      "Марта",
      "Апреля",
      "Майя",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];
    const current = new Date()
    const currentDate = `${current.getDate()} ${months[current.getMonth()]}`
    return currentDate
  }

  time () {
    this.setState({ time: `${new Date().getHours()}:${new Date().getMinutes()}`});
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
    const intervalId = setInterval(this.time, 60000);
    this.setState({intervalId: intervalId});

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&%20exclude=current,daily&units=metric&lang=ru&appid=2acbadd18c62985f6e7925919ab88df9`)
      .then(response => response.json())
      .then(item => {
        this.setState({ current: item.current, daily: item.daily, hourly: item.hourly, isLoading: true })
      })
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="App">
        <p>{this.state.time}</p>
        <p>{this.currentMonth()}</p>
        <h3>
          Прогноз погоды в <br />
          <select className="city_select" onChange={this.onChangeHanlder}>
            <option value="59.939095 30.315868">Санкт-Петербурге</option>
            <option value="55.753215 37.622504">Москве</option>
            <option value="45.035470 38.975313">Краснодаре</option>
            <option value="55.159897 61.402554">Челябинске</option>
          </select>
        </h3>
        {isLoading && <CurrentWeather data={this.state.current} />}
        {isLoading && <HourlyWeather data={this.state.hourly} />}
        {isLoading && <DailyWeather data={this.state.daily} />}
      </div>
    );
  }
}

export default App;
