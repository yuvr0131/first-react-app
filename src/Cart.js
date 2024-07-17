import { useSelector } from "react-redux";
import FoodList from "./FoodList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4 ">
      <h1 className="text-2xl font-bold"> Cart</h1>
      <div>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <FoodList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
