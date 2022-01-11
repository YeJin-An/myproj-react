import { useState, useEffect } from 'react';
import './Clock.css';
import useCurrentTime from './useCurrentTime';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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
          {date.getFullYear()} - {date.getMonth() + 1} - {date.getDate()}{' '}
          {WEEKDAYS[date.getDay()]}
        </p>
        {/* <p class="time">{date.toISOString().slice(11, 19)}</p> */}
        <p class="text">
          {date.getHours}:{date.getMinutes()}:{date.getSeconds}
        </p>
      </div>
    </div>
  );
}

export default Clock;
