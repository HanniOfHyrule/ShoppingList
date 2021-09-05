import react from "react";
import "./List.css";

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
