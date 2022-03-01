import React, { useState } from "react";
import classes from "./AddItem.module.css";

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd(name);
      e.target.preventDefault();
    }
  };

  const handleClick = () => {
    if (handleKeyPress !== "click") {
      onAdd(name);
    }
  };

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="text"
        value={name}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        type="button"
        id="btnSearch"
        onClick={handleClick}
        className={classes.button}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
