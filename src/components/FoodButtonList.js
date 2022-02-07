// import "./FoodButtonList.css";
import { useState } from "react";

const FoodButtonList = ({ list }) => {
  const [addItem, setAddItem] = useState("");

  const handleChange = (event) => {
    setAddItem(addItem);
    return setAddItem;
  };
  console.log(list);

  return (
    <div>
      <ul className="boxForItems grid grid-cols-2 " onChange={handleChange}>
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
          .map((addItem) => (
            <button
              className=" bg-green-200 hover:bg-orange-500 rounded-lg m-3 text-black text-lg px-4 py-4 row-start-2 row-end-2 "
              key={addItem.id}
              onClick={handleChange}
              type="submit"
            >
              {addItem.name}
            </button>
          ))}
      </ul>
    </div>
  );
};

export default FoodButtonList;
