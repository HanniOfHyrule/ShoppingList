import { useState } from "react";
import classes from "./FoodListItem.module.css";

// Listen status und
const FoodListItem = ({ list }) => {
  const [name, setName] = useState();
  const clickHandler = () => {
    setName(name);
    return setName;
  };
  console.log(list);
  return (
    <ul className={classes.foodlistitem}>
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
          <ul key={item.id} onClick={clickHandler} className={classes.item}>
            {item.name}
           
          </ul>
        ))}
    </ul>
  );
};

export default FoodListItem;
