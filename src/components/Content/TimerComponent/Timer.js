import styled from "styled-components";
import { CountdownTimer } from "utils/countDownTimer";

export const TimeWrapper = styled.div`
  display: flex;

  font-weight: 500;
  font-size: 18px;
  line-height: 30px;

  margin-left: -15px;
  margin-right: -15px;
`;

export const TimeUnit = styled.div`
  margin-left: 15px;
  margin-right: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeValue = styled.div``;

export const TimeLabel = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  color: var(--secondary-text-color);
`;

export const Timer = () => {
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("March 1, 2023"),
  });

  return (
    <TimeWrapper id="timer-1">
      <TimeUnit>
        <TimeValue data-value="days">00</TimeValue>
        <TimeLabel>Days</TimeLabel>
      </TimeUnit>
      <span>:</span>
      <TimeUnit>
        <TimeValue data-value="hours">00</TimeValue>
        <TimeLabel>Hours</TimeLabel>
      </TimeUnit>
      <span>:</span>
      <TimeUnit>
        <TimeValue data-value="mins">00</TimeValue>
        <TimeLabel>Mins</TimeLabel>
      </TimeUnit>
      <span>:</span>
      <TimeUnit>
        <TimeValue data-value="secs">00</TimeValue>
        <TimeLabel>Sec</TimeLabel>
      </TimeUnit>
    </TimeWrapper>
  );
};
