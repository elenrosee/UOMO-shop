import { Container } from "common";
import styled from "styled-components";
import { CompanyInfo } from "./CompanyInfo";
import { SiteLinks } from "./SiteLinks";

export const FooterContainer = styled.div`
  background-color: var(--background-footer-color);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <CompanyInfo />
        <SiteLinks />
      </Wrapper>
    </FooterContainer>
  );
};
