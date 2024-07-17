import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } = resInfo?.info.id;

  const { itemCards } = resInfo?.info.id;
  console.log(resInfo?.info.id);
  if (resInfo === null) return <shimmer />;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.info.id.menu}>{item.info.id.menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
