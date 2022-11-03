import styled from "styled-components";

export const FollowUsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FollowUsSocial = styled.ul`
  display: inline-flex;
  flex-direction: column-reverse;
  align-items: center;

  li {
    margin-bottom: 20px;
  }
`;

export const FollowUsText = styled.p`
  text-transform: uppercase;
  display: inline-block;

  margin: 0 -30px;

  color: #767676;
  transform: rotate(-90deg) translate(-100%, 140%);
  transform-origin: 0 0;
`;
