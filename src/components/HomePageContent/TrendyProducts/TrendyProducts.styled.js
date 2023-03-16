import { Breakpoints, Container, MQ } from "common";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TrendyProductsContainer = styled(Container)`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 100px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 15px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 26px;
  line-height: 37px;

  ${MQ(Breakpoints.md)} {
    font-size: 35px;
    line-height: 47px;
  }
`;

export const AccentTitle = styled(Title)`
  font-weight: 700;
`;

export const LinkWraper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 42px;
`;

export const SeeAllProductsLink = styled(NavLink)`
  font-weight: 500;
  position: relative;

  ::after {
    content: "";
    display: inline-block;
    background-color: black;
    width: 100px;
    height: 2px;
    position: absolute;
    left: 1px;
    bottom: -2px;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
