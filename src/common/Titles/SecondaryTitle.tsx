import { FC } from "react";
import {
  AccentTitle,
  Description,
  SlideLink,
  Text,
  Title,
  TitleContainer,
  TitleWrapper,
} from "./SecondaryTitle.styled";

type SecondaryTitleProps = {
  description?: string;
  title?: string;
  accentTitle?: string;
  link?: string;
  linkText?: string;
  text?: string;
};

export const SecondaryTitle: FC<SecondaryTitleProps> = ({
  description,
  title,
  accentTitle,
  link,
  linkText,
  text,
}) => {
  return (
    <TitleContainer>
      <Description>{description}</Description>
      <TitleWrapper>
        <AccentTitle>{accentTitle}&nbsp;</AccentTitle>
        <Title>{title}</Title>
      </TitleWrapper>
      <Text>{text}</Text>
      <SlideLink to={`${link}`}>{linkText}</SlideLink>
    </TitleContainer>
  );
};
