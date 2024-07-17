//header of food app
import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //Subscribing to a store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> OnlineStatus:{useOnlineStatus ? "✔" : "♦"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/foodlist">FoodList</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/cart">🛒- ({cartItems.length}items)</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
