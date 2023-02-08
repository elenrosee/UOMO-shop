import { Breakpoints, MQ } from "common";
import { useMediaQuery } from "react-responsive";

import motorbiker from "../../../images/motorbiker.jpg";
import motorbikerMob from "../../../images/motorbiker_mob.jpg";
import girlOnRed from "../../../images/girl_on_red.jpg";
import girlOnRedMob from "../../../images/girl_on_red_mob.jpg";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 40px;

  ${MQ(Breakpoints.md)} {
    display: flex;
    justify-content: center;

    margin-bottom: 90px;
  }
`;

export const BannerItem = styled.div`
  height: 310px;
  background-color: #a62334;
  display: flex;

  display: flex;
  justify-content: end;
  align-items: flex-end;

  position: relative;

  &:first-child {
    margin-bottom: 15px;
  }

  ${MQ(Breakpoints.md)} {
    width: calc(100vw - 45px / 2);
    max-width: 690px;
    height: 398px;

    &:first-child {
      margin-right: 15px;
      margin-bottom: 0px;
    }
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;

  &.accentImage {
    width: calc(100% - 125px);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  bottom: 0;

  margin: 30px;

  text-transform: uppercase;

  &.accentBanner {
    color: white;
  }

  ${MQ(Breakpoints.md)} {
    margin: 50px;
  }
`;

const Description = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;

  ${MQ(Breakpoints.md)} {
    font-size: 26px;
    line-height: 36px;
  }
`;

const SlideLink = styled(NavLink)`
  font-weight: 500;
  position: relative;

  margin-top: 13px;

  ${MQ(Breakpoints.md)} {
    margin-top: 18px;
  }

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

  &.accentBanner {
    &::after {
      background-color: white;
    }
  }
`;

export const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  return (
    <Wrapper>
      <BannerItem>
        <TitleContainer className={"accentBanner"}>
          <Description>STARTING AT $19</Description>
          <Title>Women’s T-Shirts</Title>
          <SlideLink className={"accentBanner"}>Shop Now</SlideLink>
        </TitleContainer>
        {isMobile && (
          <Img src={girlOnRedMob} alt={"couple"} className={"accentImage"} />
        )}
        {isDesctop && (
          <Img src={girlOnRed} alt={"couple"} className={"accentImage"} />
        )}
      </BannerItem>

      <BannerItem>
        <TitleContainer>
          <Description>STARTİNG AT $39</Description>
          <Title>Men’s Sportswear</Title>
          <SlideLink>Shop Now</SlideLink>
        </TitleContainer>
        {isMobile && <Img src={motorbikerMob} alt={"motobiker"} />}
        {isDesctop && <Img src={motorbiker} alt={"motobiker"} />}
      </BannerItem>
    </Wrapper>
  );
};
