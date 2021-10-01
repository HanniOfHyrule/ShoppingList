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
      {list
        .sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        .map((item) => (
          <button
            className="foodListItems"
            key={item.id}
            onClick={clickHandler}
            type="submit">
            {item.name}
            {/*<button type="submit" id="delete" name="delete" />*/}
          </button>
        ))}
    </ul>
  );
};

export default List;
