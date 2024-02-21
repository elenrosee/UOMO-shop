import styled from "styled-components";

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
