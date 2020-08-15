import React, { useState, useEffect } from 'react';

const IntervalExample = () => {
  const [time,setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {setTime(() => {
        console.log('hello')
        return `${new Date().getHours()}:${new Date().getMinutes()<10 ? "0"+new Date().getMinutes() : new Date().getMinutes()}`;
    })},1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p>{time}</p>
  );
};

export default IntervalExample;