import { data } from 'autoprefixer';
import { useState, useEffect } from 'react';
import './Clock.css';

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SET', 'SUN'];

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="clock-wrapper">
      <h2>시계</h2>

      <div class="clock">
        <p class="date">
          {data.getMonth() + 1} - {data.getDate()}-{WEEKDAYS[data.getDay()]}
        </p>
        <p class="time">{date.toISOString().slice(11, 19)}</p>
        <p class="text">Powered by React.js</p>
      </div>
    </div>
  );
}

export default Clock;
