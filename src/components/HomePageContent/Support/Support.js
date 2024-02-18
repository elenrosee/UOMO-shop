import { CartSvg, HeadphoneSvg, ShieldSvg } from "../../../icons";
import {
  IconsList,
  ListItem,
  SupportContainer,
  Text,
  Title,
} from "./Support.styled";

export const Support = () => {
  return (
    <SupportContainer>
      <IconsList>
        <ListItem>
          <CartSvg />
          <Title>FAST AND FREE DELIVERY</Title>
          <Text>Free delivery for all orders over $140</Text>
        </ListItem>
        <ListItem>
          <HeadphoneSvg />
          <Title>24/7 CUSTOMER SUPPORT</Title>
          <Text>Friendly 24/7 customer support</Text>
        </ListItem>
        <ListItem>
          <ShieldSvg />
          <Title>MONEY BACK GUARANTEE</Title>
          <Text>We return money within 30 days</Text>
        </ListItem>
      </IconsList>
    </SupportContainer>
  );
};
