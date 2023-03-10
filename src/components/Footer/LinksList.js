import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 160px;
  padding-bottom: 20px;
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;

  margin-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;

export const LinkTo = styled(Link)`
  font-weight: 400;
  line-height: 40px;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  &:focus,
  :hover {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      background-color: black;
      width: 26px;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -5px;
    }
  }
`;

export const LinksList = ({ title, links }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {links.map((link, index) => (
          <LinkTo to={link.linkTo} key={index}>
            {link.name}
          </LinkTo>
        ))}
      </List>
    </Wrapper>
  );
};
