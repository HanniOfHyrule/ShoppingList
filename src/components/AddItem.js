import "./AddItem.css";
import List from "./List";

const AddItem = ({ name, onChange: handleChange, onAdd }) => {
  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" id="btnSearch" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default AddItem;
