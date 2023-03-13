import styled from "styled-components";

export const ImagesContainer = styled.div`
  display: flex;
`;

export const AllImages = styled.div`
  min-width: 90px;
  margin-right: 10px;
`;

export const Img = styled.img`
  display: block;
  height: 90px;
  width: 90px;

  object-fit: cover;

  &.focused {
    border: 2px solid black;
  }

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MainImage = styled.img`
  display: block;
  height: 700px;
  width: 712px;

  object-fit: cover;
`;
