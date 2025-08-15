import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
const CountDownTimer = ({targetDate}) => {
    const {timer_box, time_items} = styles
    const pad2 = (n) => String(n).padStart(2, '0')

    const calculateTimeLeft = () => {
        const targetMs = Number(new Date(targetDate));
        const nowMs = Date.now();
        const diff = targetMs - nowMs;

        if(Number.isNaN(targetMs)) return null

        if(diff < 0){
            return {days: 0, hours: 0, minutes: 0, seconds: 0, total: 0};
        }

        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds, total: diff };

    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
    const intervalRef = useRef(null);

    useEffect(() => {
    const tick = () => {
      const next = calculateTimeLeft();
      setTimeLeft(next);

      if (!next || next.total <= 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    tick();
    intervalRef.current = setInterval(tick, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [targetDate]);

  if (timeLeft === null) {
    return <div>Ngày mục tiêu không hợp lệ.</div>;
  }

  const { days, hours, minutes, seconds } = timeLeft;

    return (
    <div className={timer_box}>
      <div className={time_items}>
        {pad2(days)}
        <span>Days</span>
      </div> 
      <div className={time_items}>
        {pad2(hours)}
         <span>Hours</span>
      </div> 
      <div className={time_items}>
        {pad2(minutes)}
         <span>Mins</span>
      </div> 
      <div className={time_items}>{
        pad2(seconds)}
        <span>Secs</span>
      </div>
    </div>
    );
};

export default CountDownTimer;