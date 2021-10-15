import { useRef } from "react";
import "./AddItem.css";

const AddItem = ({ name, onChange: handleChange, onAdd }) => {
  const inputRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputRef.current.value !== "") {
      onAdd();
    }
  };

  const handleClick = () => {
    if (inputRef.current.value !== "") {
      onAdd();
    }
  };

  return (
    <form>
      <div>
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button type="button" id="btnSearch" onClick={handleClick}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddItem;
