import { HeartSvg } from "icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -15px;
`;

export const ProductItem = styled.li`
  margin: 15px;
  width: 330px;
  height: 495px;
`;

export const ProductImg = styled.img`
  display: block;
  height: 400px;
  width: 100%;

  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 14px;
`;

export const ProductCategory = styled.p`
  text-transform: capitalize;
  color: var(--secondary-text-color);
`;

export const ProductName = styled(NavLink)`
  font-size: 16px;
`;
export const PriceWrapper = styled.div`
  display: flex;
`;

export const ProductPrice = styled.p`
  text-decoration: ${({ crossedOut }) =>
    crossedOut ? "line-through 2px" : "none"};
  color: ${({ color }) => (!color ? "#222" : color)};
  font-size: 16px;

  &:first-child {
    margin-right: 10px;
  }
`;

export const Products = ({ items }) => {
  return (
    <ProductsList>
      {items.map(
        ({ url, alt, category, name, link, price, onSale, discount, id }) => (
          <ProductItem key={id}>
            <ProductImg src={url} alt={alt} />
            <Wrapper>
              <ProductCategory>{category}</ProductCategory>
              <HeartSvg fill={"var(--secondary-text-color)"} />
            </Wrapper>
            <ProductName>{name}</ProductName>
            {!onSale ? (
              <ProductPrice>${price}</ProductPrice>
            ) : (
              <PriceWrapper>
                <ProductPrice
                  crossedOut={true}
                  color={"var(--secondary-text-color)"}
                >
                  ${price}
                </ProductPrice>
                <ProductPrice color={"red"}>${price - discount}</ProductPrice>
              </PriceWrapper>
            )}
          </ProductItem>
        )
      )}
    </ProductsList>
  );
};
