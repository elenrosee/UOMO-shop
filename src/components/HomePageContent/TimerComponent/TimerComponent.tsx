import { Timer } from "./Timer";
import {
  AccentTitle,
  Description,
  SlideLink,
  Title,
  TitleContainer,
  Wrapper,
} from "./TimerComponent.styled";

export const TimerComponent = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Description>DEAL OF THE WEEK</Description>
        <AccentTitle>Spring</AccentTitle>
        <Title>Collection</Title>
        <SlideLink to={"/shop/new-in"}>SHOP NOW</SlideLink>
      </TitleContainer>
      <Timer targetDate={new Date("May 1, 2024")} />
    </Wrapper>
  );
};
