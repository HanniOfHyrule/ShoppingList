//import { name } from "file-loader";
import React from "react";
import { v4 as uuidv4 } from "uuid";

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

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default App;
