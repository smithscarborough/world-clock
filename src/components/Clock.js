import React, { useEffect, useState } from 'react'
import AnalogClock from 'analog-clock-react';

export default function Clock(props) {
    const [ time, setTime ] = useState({ hours: 0, minutes: 0, seconds: 0})


    useEffect(() => {
        const updateClock = () => {
        //   console.log(timezone);
          const timeString = new Date().toLocaleString('en-US', {
            timeZone: props.timezone.value,
          });
          const dateTime = new Date(timeString)
          setTime({
              hours: dateTime.getHours(),
              minutes: dateTime.getMinutes(),
              seconds: dateTime.getSeconds()
          });
        };
    
        const interval = setInterval(() => {
          updateClock();
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }, [props.timezone]);

    return (
        <div>
            {props.timezone && <AnalogClock useCustomTime {...time}/>}
        </div>
    )
}