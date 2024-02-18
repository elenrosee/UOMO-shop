import { Breakpoints } from "../../common";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  AllImages,
  ImagesContainer,
  Img,
  MainImage,
} from "./ProductImages.styled";

export const ProductImages = ({ img, mobImg, alt }) => {
  const [focusedImgIndex, setFocusedImgIndex] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  return (
    <ImagesContainer>
      <AllImages>
        {isMobile &&
          mobImg.map((img, index) => {
            return (
              <Img
                onClick={() => setFocusedImgIndex(index)}
                className={focusedImgIndex === index && "focused"}
                src={img}
                alt={alt}
                key={index}
              />
            );
          })}
        {isDesctop &&
          img.map((img, index) => {
            return (
              <Img
                onClick={() => setFocusedImgIndex(index)}
                className={focusedImgIndex === index && "focused"}
                src={img}
                alt={alt}
                key={index}
              />
            );
          })}
      </AllImages>
      {isMobile && <MainImage src={mobImg[focusedImgIndex]} alt={alt} />}
      {isDesctop && <MainImage src={img[focusedImgIndex]} alt={alt} />}
    </ImagesContainer>
  );
};
