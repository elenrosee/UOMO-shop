import { FC } from "react";
import { LinkTo, List, Title, Wrapper } from "./LinksList.styled";

type Link = {
  name: string;
  linkTo: string;
};

interface LinksListProps {
  title: string;
  links: Link[];
}

export const LinksList: FC<LinksListProps> = ({ title, links }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {links.map((link, index) => (
          <LinkTo to={`shop/${link.linkTo}`} key={index}>
            {link.name}
          </LinkTo>
        ))}
      </List>
    </Wrapper>
  );
};
