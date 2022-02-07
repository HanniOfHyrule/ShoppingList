//import { name } from "file-loader";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuid zufallsbasierte eindeutige ID
import AddItem from "./AddItem";
import FoodListItem from "./FoodListItem";
import { useState, useEffect } from "react";
import FoodButtonList from "./FoodButtonList";

const save = (listData) => {
  localStorage.setItem("listDataStore", JSON.stringify(listData)); // legt daten in den localStorage
};

const load = () => {
  let listData = [];

  if (localStorage.getItem("listDataStore")) {
    listData = JSON.parse(localStorage.getItem("listDataStore")); // holt daten aus dem localStorage
  }

  return listData; //gibt geStorte liste aus - wenn noch keine vorhanden dann gibt er die initialList aus
};

const ShoppingCard = () => {
  const [listData, setListData] = useState(load());
  const [name, setName] = useState("");

  useEffect(() => {
    save(listData);
  }, [listData]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    setListData(listData.concat({ name: name, id: uuidv4() }));

    setName("");
  }

  return (
    <div className="container mx-auto">
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
        className="bg-green-200 text-center "
      />
      <FoodListItem list={listData} className="" />
      <FoodButtonList list={listData} className="" />
    </div>
  );
};

export default ShoppingCard;
