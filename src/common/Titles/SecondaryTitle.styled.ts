import styled from "styled-components";

import { Link } from "react-router-dom";
import { Breakpoints, MQ } from "..";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  bottom: 0;

  margin: 30px;

  text-transform: uppercase;

  ${MQ(Breakpoints.md)} {
    margin: 40px;
  }
`;

export const Description = styled.span`
  font-weight: 500;
  text-transform: uppercase;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${MQ(Breakpoints.md)} {
    flex-direction: row;
  }
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;

  ${MQ(Breakpoints.md)} {
    font-size: 26px;
    line-height: 36px;
  }
`;

export const Text = styled.p`
  text-transform: none;
`;

export const SlideLink = styled(Link)`
  font-weight: 500;
  position: relative;

  margin-top: 7px;

  &::after {
    content: "";
    display: inline-block;
    background-color: black;
    width: 50px;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -2px;
  }
`;

export const AccentTitle = styled(Title)`
  font-weight: 700;
`;
