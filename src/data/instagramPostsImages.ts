import bootBlackLeather from "../images/uomo_inst/boot-black-leather.jpg";
import fashionWoman from "../images/uomo_inst/fashion-woman.jpg";
import greyLeatherJacket from "../images/uomo_inst/grey-leather-jacket.jpg";
import jeansSweater from "../images/uomo_inst/jeans-sweater.jpg";
import modernShop from "../images/uomo_inst/modern-shop.jpg";
import shirtMockup from "../images/uomo_inst/shirt-mockup.jpg";
import sneakers from "../images/uomo_inst/sneakers.jpg";
import summerSundresses from "../images/uomo_inst/summer-sundresses.jpg";
import sustainableFashion1 from "../images/uomo_inst/sustainable-fashion-1.jpg";
import sustainableFashion from "../images/uomo_inst/sustainable-fashion.jpg";
import whiteHoodie from "../images/uomo_inst/white-hoodie.jpg";
import whiteShirts from "../images/uomo_inst/white-shirts.jpg";

export type InstagramPostDataType = {
  id: number;
  img: string;
  alt: string;
  link: string;
};

export type InstagramPostsImagesDataType = InstagramPostDataType[];

export const instagramPostsImages = [
  {
    id: 1,
    img: bootBlackLeather,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 2,
    img: fashionWoman,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 3,
    img: greyLeatherJacket,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 4,
    img: jeansSweater,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 5,
    img: modernShop,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 6,
    img: shirtMockup,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 7,
    img: sneakers,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 8,
    img: summerSundresses,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 9,
    img: sustainableFashion,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 10,
    img: sustainableFashion1,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 11,
    img: whiteHoodie,
    alt: "women cap",
    link: "/colection",
  },
  {
    id: 12,
    img: whiteShirts,
    alt: "women cap",
    link: "/colection",
  },
];
