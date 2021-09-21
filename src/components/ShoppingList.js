//import { name } from "file-loader";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuid zufallsbasierte eindeutige ID
import AddItem from "./AddItem";
import List from "./List";
import { useState } from "react";

const initialList = [
  {
    id: "a",
    name: "Äpfel",
  },
  {
    id: "b",
    name: "Bananen",
  },
];

const ShoppingList = () => {
  const [listData, setListData] = useState(initialList);

  const [name, setName] = useState("");

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
