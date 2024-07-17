import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import listOfRestaurants from "../utils/mockData";
import resList from "../utils/mockData";
import UserContext from "../utils/UserContext";

const Body = () => {
  //  const [loggedInUser, setUserName] = useContext(UserContext);
  const [listOfRestaurants, setListofrestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <h1>
        Look's like you're Offline !! Please check your internet connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurantcards and update ui
              //searchtext
              console.log(searchText);
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filtered);
            }}
          >
            search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/mockdata"}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
