import {
  FacebookSvg,
  InstagramSvg,
  PinterestSvg,
  TwitterSvg,
} from "../../icons";
import {
  FollowUsContainer,
  FollowUsSocial,
  FollowUsText,
} from "./FollowUs.styled";

export const FollowUs = () => {
  return (
    <FollowUsContainer>
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
      <FollowUsText>Follow Us</FollowUsText>
    </FollowUsContainer>
  );
};
