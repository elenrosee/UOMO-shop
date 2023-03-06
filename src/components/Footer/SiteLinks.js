import { LinksList } from "./LinksList";

export const SiteLinks = () => {
  const companyLinks = [
    { name: "About Us", linkTo: "/about-us" },
    { name: "Careers", linkTo: "/careers" },
    { name: "Affiliates", linkTo: "/affiliates" },
    { name: "Blog", linkTo: "/blog" },
    { name: "Contact Us", linkTo: "/contact-us" },
  ];

  const shopLinks = [
    { name: "New Arrivals", linkTo: "/new-arrivals" },
    { name: "Accessories", linkTo: "/accessories" },
    { name: "Men", linkTo: "/men" },
    { name: "Women", linkTo: "/women" },
    { name: "Shop All", linkTo: "/shop-all" },
  ];

  const helpLinks = [
    { name: "Customer Service", linkTo: "/customer-service" },
    { name: "My Account", linkTo: "/my-account" },
    { name: "Find a Store", linkTo: "/find-a-store" },
    { name: "Legal & Privacy", linkTo: "/privacy" },
    { name: "Gift Card", linkTo: "/gift-card" },
  ];

  return (
    <>
      <LinksList title="Company" links={companyLinks} />
      <LinksList title="Shop" links={shopLinks} />
      <LinksList title="Help" links={helpLinks} />
    </>
  );
};
