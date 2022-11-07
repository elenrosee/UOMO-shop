import styled from "styled-components";

export const TrendyProductsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 30px;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 35px;
  line-height: 47px;
`;

export const AccentTitle = styled(Title)`
  font-weight: 700;
`;

export const ProductSectionsList = styled.ul`
  display: flex;
  justify-content: center;

  margin-bottom: 40px;
`;

export const SectionName = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const SectionButton = styled.button`
  font-size: 16px;
  line-height: 22px;
  color: #767676;

  background-color: transparent;
  border: none;

  &.accent {
    color: black;
    position: relative;

    ::after {
      content: "";
      display: inline-block;
      background-color: black;
      width: 50px;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -2px;
    }
  }
`;
