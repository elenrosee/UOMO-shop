import styled from "styled-components";
import { SecondaryTitle } from "../Titles/SecondaryTitle";

// data = {
//     url: cap,
//     alt: 'women cap',
//     title: 'colection',
//     accentTitle: 'women',
//     description: 'hot list',
//     link: '/colection',
//   },
// {
//     url: cap,
//     alt: 'women cap',
//     title: 'CARDS',
//     accentTitle: 'E-GIFT',
//     text: 'some text',
//     link: '/colection',
//     linkText: 'discover more',
//   }}

// settings = {
//     width: '20px'
//     heigth: '40px'
//     color: '#fff'
//     imgWidth: '40px'
// }

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
