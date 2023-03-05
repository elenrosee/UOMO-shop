import { FacebookSvg, InstagramSvg, PinterestSvg, TwitterSvg } from "icons";
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

export const SocialLinks = () => {
  return (
    <FollowUsSocial>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PinterestSvg />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramSvg />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterSvg />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookSvg />
        </a>
      </li>
    </FollowUsSocial>
  );
};
