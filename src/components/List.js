import "./List.css";
import { useState } from "react";

// Listen status und
const List = ({ list }) => {
  const [name, setName] = useState();
  const clickHandler = () => {
    setName(name);
    console.log(name);
  };
  return (
    <ul className="boxForItems">
      {list.map((item) => (
        <button
          className="foodListItems"
          key={item.id}
          onClick={clickHandler}
          type="submit">
          {item.name}
        </button>
      ))}
    </ul>
  );
};

export default List;
