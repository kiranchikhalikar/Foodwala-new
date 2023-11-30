import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className="m-4 p-4 w-[305px] rounded-lg bg-gray-100 hover:bg-gray-200 overflow-auto">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h5 className="text-sm">{cuisines.join(", ")}</h5>
      <div className="flex justify-between">
        <h4 className="bg-green-600 px-2">{avgRating}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>User : {loggedInUser}</h4> */}
      </div>
    </div>
  );
};

// Higher Order Component

// Input - Trstaurantcard ->RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg ml-5">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
