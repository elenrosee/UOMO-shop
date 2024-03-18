import styled from "styled-components";

export const SizesWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-weight: 500;
  text-transform: uppercase;

  margin-right: 50px;
`;

export const SizesList = styled.div``;

export const SizesItem = styled.button`
  height: 30px;
  padding: 0 13px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #e4e4e4;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    border: 1px solid black;
  }
`;
