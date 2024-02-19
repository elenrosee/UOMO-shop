import { CompanyInfo } from "./CompanyInfo";
import { FooterContainer, Wrapper } from "./Footer.styled";
import { SiteLinks } from "./SiteLinks";
import { SubscribeBlock } from "./SubscribeBlock";

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <CompanyInfo />
        <SiteLinks />
        <SubscribeBlock />
      </Wrapper>
    </FooterContainer>
  );
};
