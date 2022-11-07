import { ShopCtegoriesBlock } from "common";
import styled from "styled-components";

import { shopColectionsData } from "data/shopColectionsData";

export const ShopColectionsContainer = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
`;

const settings = [
  {
    width: "690px",
    heigth: "600px",
    color: "#F2F3F7",
    img: true,
    imgWidth: "473px",
  },
  {
    width: "690px",
    heigth: "285px",
    color: "#EAE9E7",
    img: true,
    imgWidth: "316px",
  },
  {
    width: "330px",
    heigth: "285px",
    color: "#E7E6E4",
    img: true,
    imgWidth: "230px",
  },
  {
    width: "330px",
    heigth: "285px",
    color: "#F5E6E0",
    img: false,
    imgWidth: "230px",
  },
];

export const ShopColections = () => {
  return (
    <ShopColectionsContainer>
      <ShopCtegoriesBlock settings={settings[0]} data={shopColectionsData[0]} />
      <div>
        <ShopCtegoriesBlock
          settings={settings[1]}
          data={shopColectionsData[1]}
        />
        <Wrapper>
          <ShopCtegoriesBlock
            settings={settings[2]}
            data={shopColectionsData[2]}
          />
          <ShopCtegoriesBlock
            settings={settings[3]}
            data={shopColectionsData[3]}
          />
        </Wrapper>
      </div>
    </ShopColectionsContainer>
  );
};
