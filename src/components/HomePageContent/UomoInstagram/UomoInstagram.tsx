import { Breakpoints } from "../../../common";
import {
  instagramPostsImages,
  InstagramPostDataType,
} from "../../../data/instagramPostsImages";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Img,
  ImgWrapper,
  InstagramContainer,
  Title,
} from "./UomoInstagram.styled";

export const UomoInstagram = () => {
  const [items, setItems] = useState<InstagramPostDataType[]>([]);

  useEffect(() => {
    const loadData = () => {
      setItems(instagramPostsImages);
    };

    loadData();
  }, []);
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  const displayQuantity = isMobile ? 9 : 12;

  return (
    <InstagramContainer>
      <Title>@uomo</Title>
      <ImgWrapper>
        {items.map((item, index) => {
          const { id, img, alt } = item;

          return (
            index < displayQuantity && <Img src={img} alt={alt} key={id} />
          );
        })}
      </ImgWrapper>
    </InstagramContainer>
  );
};
