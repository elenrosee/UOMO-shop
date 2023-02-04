import styled from "styled-components";
import { SecondaryTitle } from "../Titles/SecondaryTitle";

export const BlockContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: end;
  align-items: flex-end;

  position: relative;

  margin: 15px;
`;

export const ColectionImage = styled.img`
  display: block;
  height: 100%;
  width: ${({ width }) => width};

  object-fit: cover;
`;

export const ShopCtegoriesBlock = ({ data, settings }) => {
  const { width, heigth, color, img = false, imgWidth } = settings;
  const { url, alt, description, title, accentTitle, link, text, linkText } =
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
      {img && <ColectionImage alt={alt} src={url} width={imgWidth} />}
    </BlockContainer>
  );
};
