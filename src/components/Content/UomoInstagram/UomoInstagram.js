import { Breakpoints } from "common";
import { instagramPostsImages } from "data/instagramPostsImages";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Img, ImgWrapper, Title } from "./UomoInstagram.styled";

export const UomoInstagram = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setItems(instagramPostsImages);
    };

    loadData();
  }, []);
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  const displayQuantity = isMobile ? 9 : 12;

  return (
    <Container>
      <Title>@uomo</Title>
      <ImgWrapper>
        {items.map((item, index) => {
          const { id, img, alt } = item;

          return (
            index < displayQuantity && <Img src={img} alt={alt} key={id} />
          );
        })}
      </ImgWrapper>
    </Container>
  );
};
