import React, { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Our Signature dishes</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
