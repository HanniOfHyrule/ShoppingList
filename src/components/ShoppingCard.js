import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuid zufallsbasierte eindeutige ID
import AddItem from "./AddItem";
import FoodListItem from "./FoodListItem";
import { useState, useEffect } from "react";
import FoodButtonList from "./FoodButtonList";
import { addFoodItem, getFoodItems } from "../SupabaseClient";
import "./ShoppingCard.css";

const ShoppingCard = () => {
  const [listData, setListData] = useState([]);

  async function handleAdd(name) {
    const foodItem = {
      name: name,
    };
    await addFoodItem(foodItem);
    setListData(listData.concat({ name: name, id: uuidv4() }));
  }

  useEffect(() => {
    async function fetchData() {
      setListData(await getFoodItems());
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <AddItem onAdd={handleAdd} className="additem" />
      <FoodListItem list={listData} className="foodlistitem" />
      <FoodButtonList list={listData} className="foodlistbutton" />
    </div>
  );
};

export default ShoppingCard;
