import { useSelector } from "react-redux";
import { getUserShopingCart } from "../../redux";
import { Container } from "../../common";
import styled from "styled-components";

export const CartContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 100px;
`;

export const CartTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;

  margin-bottom: 50px;
`;
export const CheckoutSteps = styled.ul`
  display: flex;
`;
export const CartStep = styled.li`
  width: calc(100% / 3);
`;
export const StepTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  border-bottom: solid 2px black;
  margin-bottom: 50px;
  b {
    margin-right: 12px;
    font-weight: bold;
  }
`;

export const StepDescription = styled.div`
  color: var(--secondary-text-color);
  text-transform: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;

  margin-bottom: 10px;
`;

export const ShoppingBagTable = styled.ul`
  display: flex;
  width: calc((100% / 3) * 2);
`;
export const ProductSection = styled.li`
  width: calc(100% / 2);
`;

export const PriceQuantitySubtotalSections = styled.li`
  display: flex;
  width: calc(100% / 2);

  h5 {
    width: calc(100% / 3);
  }
`;
export const SectionTitle = styled.h5`
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 9px;
`;
export const ImgNameList = styled.ul`
  &:last-child {
    border-bottom: solid 1px var(--background-footer-color);
  }

  li {
    display: flex;
    align-items: center;
    padding: 30px 0;
    border-top: solid 1px var(--background-footer-color);
  }
`;

export const Img = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ProductDescription = styled.div`
  p {
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`;

export const ProductName = styled.h4`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const CartView = () => {
  //   const dispatch = useDispatch()
  const cartItems = useSelector(getUserShopingCart);

  console.log(cartItems);

  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>

      <CheckoutSteps>
        <CartStep>
          <StepTitle>
            <b>01</b>
            <div>
              <h4>Shoping Bag</h4>
              <StepDescription>Manage Your Items List</StepDescription>
            </div>
          </StepTitle>
        </CartStep>
        <CartStep>
          <StepTitle>
            <b>02</b>
            <div>
              <h4>Shoping and Checkout</h4>
              <StepDescription>Checkout Your Items List</StepDescription>
            </div>
          </StepTitle>
        </CartStep>
        <CartStep>
          <StepTitle>
            <b>03</b>
            <div>
              <h4>Confirmation</h4>
              <StepDescription>Review And Submit Your Order</StepDescription>
            </div>
          </StepTitle>
        </CartStep>
      </CheckoutSteps>
      <ShoppingBagTable>
        <ProductSection>
          <SectionTitle>Product</SectionTitle>
          <ImgNameList>
            {cartItems.map(({ img, name, color, size }, index) => {
              return (
                <li key={index}>
                  <Img src={`${img[0]}`} alt={"alt"} key={index} />
                  <ProductDescription>
                    <ProductName>{name}</ProductName>
                    <p>Color: {color[0]}</p>
                    <p>Size: {size}</p>
                  </ProductDescription>
                </li>
              );
            })}
          </ImgNameList>
        </ProductSection>

        <PriceQuantitySubtotalSections>
          <SectionTitle>Quantity</SectionTitle>
          <SectionTitle>Price</SectionTitle>
          <SectionTitle>Subtotal</SectionTitle>
        </PriceQuantitySubtotalSections>
      </ShoppingBagTable>
    </CartContainer>
  );
};
