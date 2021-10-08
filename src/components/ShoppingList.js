//import { name } from "file-loader";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuid zufallsbasierte eindeutige ID
import AddItem from "./AddItem";
import List from "./List";
import { useState, useEffect } from "react";

const save = (listData) => {
  localStorage.setItem("listDataStore", JSON.stringify(listData)); // legt daten in den localStorage
};

const load = () => {
	let listData = [];

	if(localStorage.getItem('listDataStore')){
		listData = JSON.parse(localStorage.getItem("listDataStore")); // holt daten aus dem localStorage
	}
	
  return listData; //gibt geStorte liste aus - wenn noch keine vorhanden dann gibt er die initialList aus
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
