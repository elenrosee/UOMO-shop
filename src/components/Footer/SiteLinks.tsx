import { productsCategories } from "../../data/productsCategories";
import { LinksList } from "./LinksList";

type Link = {
  name: string;
  linkTo: string;
};

export const SiteLinks = () => {
  const companyLinks: Link[] = [
    { name: "About Us", linkTo: "new-in" },
    { name: "Careers", linkTo: "new-in" },
    { name: "Affiliates", linkTo: "new-in" },
    { name: "Blog", linkTo: "new-in" },
    { name: "Contact Us", linkTo: "new-in" },
  ];

  const shopLinks: Link[] = productsCategories;

  const helpLinks: Link[] = [
    { name: "Customer Service", linkTo: "new-in" },
    { name: "My Account", linkTo: "new-in" },
    { name: "Find a Store", linkTo: "new-in" },
    { name: "Legal & Privacy", linkTo: "new-in" },
    { name: "Gift Card", linkTo: "new-in" },
  ];

  return (
    <>
      <LinksList title="Company" links={companyLinks} />
      <LinksList title="Shop" links={shopLinks} />
      <LinksList title="Help" links={helpLinks} />
    </>
  );
};
