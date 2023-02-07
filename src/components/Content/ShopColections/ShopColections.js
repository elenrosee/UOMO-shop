import styled from "styled-components";

import { shopColectionsData } from "data/shopColectionsData";
import { ShopCtegoriesBlock } from "./ShopCtegoriesBlock";
import { Breakpoints, MQ } from "common";
import { useMediaQuery } from "react-responsive";

export const ShopColectionsContainer = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${MQ(Breakpoints.md)} {
    margin-top: 75px;
    margin-bottom: 75px;
    flex-wrap: nowrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

const settings = [
  {
    width: "690px",
    heigth: "600px",
    color: "#F2F3F7",
    isImg: true,
    imgWidth: "473px",
  },
  {
    width: "690px",
    heigth: "285px",
    color: "#EAE9E7",
    isImg: true,
    imgWidth: "316px",
  },
  {
    width: "330px",
    heigth: "285px",
    color: "#E7E6E4",
    isImg: true,
    imgWidth: "230px",
  },
  {
    width: "330px",
    heigth: "285px",
    color: "#F5E6E0",
    isImg: false,
    imgWidth: "230px",
  },
];

const mobileSettings = [
  {
    width: `calc(100vw - 30px)`,
    heigth: "285px",
    color: "#F2F3F7",
    isImg: true,
    imgWidth: "307px",
  },
  {
    width: `calc(100vw - 30px)`,
    heigth: "285px",
    color: "#EAE9E7",
    isImg: true,
    imgWidth: "234px",
  },
  {
    width: `calc(100vw - 30px)`,
    heigth: "285px",
    color: "#E7E6E4",
    isImg: true,
    imgWidth: "285px",
  },
  {
    width: `calc(100vw - 30px)`,
    heigth: "285px",
    color: "#F5E6E0",
    isImg: false,
    imgWidth: "230px",
  },
];

export const ShopColections = () => {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  return (
    <>
      {isMobile && (
        <ShopColectionsContainer>
          <ShopCtegoriesBlock
            settings={mobileSettings[0]}
            data={shopColectionsData[0]}
          />
          <ShopCtegoriesBlock
            settings={mobileSettings[1]}
            data={shopColectionsData[1]}
          />
          <ShopCtegoriesBlock
            settings={mobileSettings[2]}
            data={shopColectionsData[2]}
          />
          <ShopCtegoriesBlock
            settings={mobileSettings[3]}
            data={shopColectionsData[3]}
          />
        </ShopColectionsContainer>
      )}
      {isDesctop && (
        <ShopColectionsContainer>
          <ShopCtegoriesBlock
            settings={settings[0]}
            data={shopColectionsData[0]}
          />
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
      )}
    </>
  );
};
