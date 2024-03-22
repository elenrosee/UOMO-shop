import { useSelector } from "react-redux";
import { getUserShopingCart } from "../../redux";

export const CartView = () => {
  //   const dispatch = useDispatch()
  const cartItems = useSelector(getUserShopingCart);

  return (
    <>
      <h1>Cart</h1>
      <ul>
        <li>
          <div>
            <span>01</span>
            <h2>Shoping Bag</h2>
          </div>
          <p>Manage Your Items List</p>
          <ul>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
          <ul>
            {cartItems.map((item, index) => {
              console.log(item);

              return <li key={item.id}>{`${item.id}`}</li>;
            })}
          </ul>
        </li>
        <li>
          <div>
            <span>02</span>
            <h2>Shoping and Checkout</h2>
          </div>
          <p>Checkout Your Items List</p>
        </li>
        <li>
          <div>
            <span>03</span>
            <h2>Confirmation</h2>
          </div>
          <p>Review And Submit Your Order</p>
        </li>
      </ul>
    </>
  );
};
