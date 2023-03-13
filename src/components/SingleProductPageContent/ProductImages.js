import { useState } from "react";
import {
  AllImages,
  ImagesContainer,
  Img,
  MainImage,
} from "./ProductImages.styled";

export const ProductImages = ({ img, alt }) => {
  const [focusedImgIndex, setFocusedImgIndex] = useState(0);

  return (
    <ImagesContainer>
      <AllImages>
        {img.map((img, index) => {
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
      <MainImage src={img[focusedImgIndex]} alt={alt} />
    </ImagesContainer>
  );
};
