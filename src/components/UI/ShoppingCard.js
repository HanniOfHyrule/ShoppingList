import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuid zufallsbasierte eindeutige ID
import AddItem from "../Items/AddItem";
import FoodListItem from "../Items/FoodListItem";
import { useState, useEffect } from "react";
import FoodButtonList from "../Items/FoodButtonList";
import { addFoodItem, getFoodItems } from "../../SupabaseClient";
import classes from "./ShoppingCard.module.css";

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
    <div className={classes.container}>
      <AddItem onAdd={handleAdd} className={classes.additem} />
      <div className={classes.wrapper}>
        <FoodListItem list={listData} className={classes.foodlistitem} />
        <FoodButtonList list={listData} className={classes.foodlistbutton} />
      </div>
    </div>
  );
};

export default ShoppingCard;
