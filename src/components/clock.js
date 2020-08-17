import React, { useState, useEffect } from 'react';
import './clock.css';

const Clock = () => {
  const [time,setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {setTime(() => {
        return `${new Date().getHours()}:${new Date().getMinutes()<10 ? "0"+new Date().getMinutes() : new Date().getMinutes()}`;
    })},1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  )
};

export default Clock;