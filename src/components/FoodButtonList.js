import { useState } from "react";

const FoodButtonList = ({ list }) => {
  const [addItem, setAddItem] = useState("");

  const handleChange = (event) => {
    setAddItem(addItem);
    return setAddItem;
  };
  console.log(list);

  return (
    <div className="foodlistbutton">
      <ul className="" onChange={handleChange}>
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
              className=" bg-purple hover:bg-red rounded-lg px-2 text-white text-lg"
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
