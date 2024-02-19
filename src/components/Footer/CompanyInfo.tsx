import { SocialLinks } from "../../common";
import { LogoSvg } from "../../icons";
import { Address, Contacts, Wrapper } from "./CompanyInfo.styled";

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
