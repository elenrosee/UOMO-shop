import { Container } from "common";
import styled from "styled-components";
import { CompanyInfo } from "./CompanyInfo";

export const FooterContainer = styled.div`
  background-color: var(--background-footer-color);

  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Wrapper = styled(Container)``;

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <CompanyInfo />
      </Wrapper>
    </FooterContainer>
  );
};
