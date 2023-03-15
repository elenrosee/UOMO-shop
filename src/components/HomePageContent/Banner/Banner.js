import { Breakpoints } from "common";
import { useMediaQuery } from "react-responsive";

import motorbiker from "../../../images/motorbiker.jpg";
import motorbikerMob from "../../../images/motorbiker_mob.jpg";
import girlOnRed from "../../../images/girl_on_red.jpg";
import girlOnRedMob from "../../../images/girl_on_red_mob.jpg";
import {
  BannerItem,
  Description,
  Img,
  SlideLink,
  Title,
  TitleContainer,
  Wrapper,
} from "./Banner.styled";

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
          <Img
            src={girlOnRedMob}
            alt={"girl on red"}
            className={"accentImage"}
          />
        )}
        {isDesctop && (
          <Img src={girlOnRed} alt={"girl on red"} className={"accentImage"} />
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
