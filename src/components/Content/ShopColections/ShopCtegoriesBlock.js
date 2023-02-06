import { Breakpoints, MQ, SecondaryTitle } from "common";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

export const BlockContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: end;
  align-items: flex-end;

  position: relative;

  margin-bottom: 15px;

  ${MQ(Breakpoints.md)} {
    margin: 15px;
  }
`;

export const ColectionImage = styled.img`
  display: block;
  height: 100%;
  width: ${({ width }) => width};

  object-fit: cover;
`;

export const ShopCtegoriesBlock = ({ data, settings }) => {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  const { width, heigth, color, isImg = false, imgWidth } = settings;
  const { img, mobImg, description, title, accentTitle, link, text, linkText } =
    data;

  return (
    <BlockContainer width={width} color={color} heigth={heigth}>
      <SecondaryTitle
        description={description}
        title={title}
        accentTitle={accentTitle}
        text={text}
        link={link}
        linkText={linkText}
      />
      {isImg && isDesctop && (
        <ColectionImage alt={img} src={img} width={imgWidth} />
      )}
      {isImg && isMobile && (
        <ColectionImage alt={mobImg} src={img} width={imgWidth} />
      )}
    </BlockContainer>
  );
};
