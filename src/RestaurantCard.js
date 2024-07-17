import { CDN_URL } from "../utils/constant";
import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    resData?.info;

  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="p-4 m-4 w-[150px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="text-balance truncate ">{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

//Higher order component

// Input->restaurantcard and output->restaurantcardpromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
