import { useEffect, useRef, useState } from "react";
import { TimeLabel, TimeUnit, TimeValue, TimeWrapper } from "./Timer.styled";

export const Timer = ({ targetDate }) => {
  const [timeLefted, setTimeLefted] = useState(null);
  const intervalID = useRef(null);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      const currentTime = new Date();
      setTimeLefted(targetDate - currentTime);
    }, 1000);

    if (timeLefted === 0) {
      clearInterval(intervalID.current);
    }

    return () => {
      clearInterval(intervalID.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const days = Math.floor(timeLefted / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLefted % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((timeLefted % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((timeLefted % (1000 * 60)) / 1000);

  return (
    <TimeWrapper>
      <TimeUnit>
        <TimeValue>{days < 10 ? "0" + days : days}</TimeValue>
        <TimeLabel>Days</TimeLabel>
      </TimeUnit>
      <span>:</span>
      <TimeUnit>
        <TimeValue>{hours < 10 ? "0" + hours : hours}</TimeValue>
        <TimeLabel>Hours</TimeLabel>
      </TimeUnit>
      <span>:</span>
      <TimeUnit>
        <TimeValue>{mins < 10 ? "0" + mins : mins}</TimeValue>
        <TimeLabel>Mins</TimeLabel>
      </TimeUnit>
      <span>:</span>
      <TimeUnit>
        <TimeValue>{sec < 10 ? "0" + sec : sec}</TimeValue>
        <TimeLabel>Sec</TimeLabel>
      </TimeUnit>
    </TimeWrapper>
  );
};
