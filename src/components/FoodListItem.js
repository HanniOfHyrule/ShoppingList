// import "./PressedButton.css";
import { useState } from "react";

// Listen status und
const FoodListItem = ({ list }) => {
  const [name, setName] = useState();
  const clickHandler = () => {
    setName(name);
    return setName;
  };

  return (
    <ul className="itemList">
      {list
        .sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .map((item) => (
          <ul
            className="bg-green-200 text-center text-lg rounded-lg m-3"
            key={item.id}
            onClick={clickHandler}
            type="submit"
          >
            {item.name}
          </ul>
        ))}
    </ul>
  );
};

export default FoodListItem;
