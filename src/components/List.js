import React from "react";
import "./List.css";
import { useState } from "react";

const List = ({ list }) => {
  return (
    <div>
      <ul className="boxForItems">
        {list.map((item) => (
          <li className="foodListItems" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
