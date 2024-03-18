import {
  FacebookSvg,
  InstagramSvg,
  PinterestSvg,
  TwitterSvg,
} from "../../icons";
import { FollowUsSocial } from "./SocialLinks.styled";

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
