import React from 'react';
import './currentMonth.css';

const currentMonth = () => {
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
    const currentDay = current.getDate();
    const currentMonth =  months[current.getMonth()]
    return (
      <div className="current_month">
        <p className="current_text">Сегодня</p>
        <p className="current_number">{currentDay}</p>
        <p className="current_text">{currentMonth}</p>
      </div>
    )
}

export default currentMonth;