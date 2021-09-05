//import { name } from "file-loader";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddItem from "./AddItem";
import List from "./List";
import { useState, useEffect } from "react";

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

const App = () => {
  const [listData, setListData] = React.useState({
    list: initialList,
    isShowList: true,
  });

  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    setListData({
      ...listData,
      list: listData.list.concat({ name: name, id: uuidv4() }),
    });

    setName("");
  }

  return (
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      <List list={listData.list} />
    </div>
  );
};

export default App;
