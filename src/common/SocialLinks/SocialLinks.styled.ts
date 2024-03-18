import styled from "styled-components";

export const FollowUsSocial = styled.ul`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
