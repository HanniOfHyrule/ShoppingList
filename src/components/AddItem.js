import React, { useState } from "react";

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
    <div>
      <input
        className="object-center bg-rose hover:bg-lime rounded m-5 text-white text"
        type="text"
        value={name}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        type="button"
        id="btnSearch"
        onClick={handleClick}
        className="bg-orange hover:bg-red text-black py-2 px-4 rounded mx-11 text-sm"
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
