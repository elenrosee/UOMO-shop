import { Breakpoints, MQ, SocialLinks } from "common";
import { LogoSvg } from "icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 280px;
  margin-bottom: 50px;
  margin-right: 15px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 0px;
  }
`;

export const Address = styled.p`
  font-weight: 500;

  margin-top: 25px;
`;

export const Contacts = styled.p`
  font-weight: 500;

  margin-top: 25px;
  margin-bottom: 25px;
`;

export const CompanyInfo = () => {
  return (
    <Wrapper>
      <LogoSvg />
      <Address>
        1418 River Drive, Suite 35 Cottonhall, CA 9622 <br />
        United States
      </Address>
      <Contacts>
        sale@uomo.com <br /> +1 246-345-0695
      </Contacts>
      <SocialLinks />
    </Wrapper>
  );
};
