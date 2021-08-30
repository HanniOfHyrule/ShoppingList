import react from "react";

const List = ({ list }) => {
  return (
    <ul className="boxForItems">
      {list.map((item) => (
        <li className="foodListItems" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
