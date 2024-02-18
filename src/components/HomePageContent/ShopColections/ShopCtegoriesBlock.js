import { Breakpoints, SecondaryTitle } from "../../../common";
import { useMediaQuery } from "react-responsive";
import { BlockContainer, ColectionImage } from "./ShopCtegoriesBlock.styled";

export const ShopCtegoriesBlock = ({ data, settings }) => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: Breakpoints.lg - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.lg });

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
      {isImg && isMobileOrTablet && (
        <ColectionImage alt={mobImg} src={img} width={imgWidth} />
      )}
    </BlockContainer>
  );
};
