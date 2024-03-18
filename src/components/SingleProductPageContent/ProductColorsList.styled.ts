import styled from "styled-components";

export const ColorsWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-weight: 500;
  text-transform: uppercase;

  margin-right: 40px;
`;

export const ColorList = styled.ul`
  display: flex;
`;
export const ColorItem = styled.li`
  display: flex;
  padding: 2px 2px;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    border: 1px solid black;
  }
`;

export const ColorBtn = styled.button`
  height: 16px;
  width: 16px;
  background-color: ${(props) => props.color};
  border: 1px solid #e4e4e4;
  border-radius: 50%;
`;
