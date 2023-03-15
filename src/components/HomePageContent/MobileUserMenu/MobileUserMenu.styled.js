import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 10px 65px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const MenuBtn = styled.button`
  background: inherit;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

export const BtnText = styled.p`
  margin-top: 10px;
`;
