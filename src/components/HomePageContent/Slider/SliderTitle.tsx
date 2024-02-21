import { FC } from "react";
import {
  AccentTitle,
  Description,
  SlideLink,
  Title,
  TitleContainer,
} from "./SliderTitle.styled";

type TitleProps = {
  description: string;
  title: string;
  accentTitle: string;
  link: string;
};

export const SliderTitle: FC<TitleProps> = ({
  description,
  title,
  accentTitle,
  link,
}) => {
  return (
    <TitleContainer>
      <Description>{description}</Description>
      <Title>{title}</Title>
      <AccentTitle>{accentTitle}</AccentTitle>
      <SlideLink to={link}>discover more</SlideLink>
    </TitleContainer>
  );
};
