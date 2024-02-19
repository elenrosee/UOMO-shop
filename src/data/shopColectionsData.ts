import cap from "../images/cap.jpg";
import capMob from "../images/cap_mob.jpg";
import tshirt from "../images/tshirt.jpg";
import tshirtMob from "../images/tshirt_mob.jpg";
import tshirt1 from "../images/tshirt1.jpg";
import tshirt1Mob from "../images/tshirt1_mob.jpg";

export type ColectionCardInfo = {
  img?: string;
  mobImg?: string;
  alt?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  link?: string;
  linkText?: string;
  text?: string;
};

export const shopColectionsData: ColectionCardInfo[] = [
  {
    img: cap,
    mobImg: capMob,
    alt: "women cap",
    title: "collection",
    accentTitle: "women",
    description: "hot list",
    link: "/shop/women",
    linkText: "shop now",
  },
  {
    img: tshirt,
    mobImg: tshirtMob,
    alt: "women cap",
    title: "collection",
    accentTitle: "men",
    description: "hot list",
    link: "/shop/men",
    linkText: "shop now",
  },
  {
    img: tshirt1,
    mobImg: tshirt1Mob,
    alt: "women cap",
    title: "collection",
    accentTitle: "kids",
    description: "hot list",
    link: "/shop/kids",
    linkText: "shop now",
  },
  {
    title: "CARDS",
    accentTitle: "E-GIFT",
    text: "Surprise someone with the gift they really want",
    link: "/colection",
    linkText: "discover more",
  },
];
