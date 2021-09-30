//import { name } from "file-loader";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuid zufallsbasierte eindeutige ID
import AddItem from "./AddItem";
import List from "./List";
import { useState, useEffect } from "react";

const initialList = [
  {
    id: uuidv4(),
    name: "Äpfel",
  },
  {
    id: uuidv4(),
    name: "Birnen",
  },
];

const save = (listData) => {
  localStorage.setItem("listDataStore", JSON.stringify(listData));
};
const load = () => {
  const listData = JSON.parse(localStorage.getItem("listDataStore"));

  if (listData === null) {
    return initialList;
  }
  return listData;
};

const ShoppingList = () => {
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
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
      <List list={listData} />
    </div>
  );
};

export default ShoppingList;
