import { useRef } from "react";
// import "./AddItem.css";

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
          className="object-center bg-green-200 hover:bg-orange-500 rounded m-11 text-white text"
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button
          type="button"
          id="btnSearch"
          onClick={handleClick}
          className="bg-orange-300 hover:bg-red-400 text-black py-2 px-4 rounded mx-11 text-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddItem;
