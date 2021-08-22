import React from "react";
import { useState } from "react";

function Search(props) {
  const [searchedText, setSearchedText] = useState("");

  const handleClick = () => {
    props.onSearched(searchedText);
  };

  return (
    <>
      <input
        type="text"
        id="header-search"
        placeholder="Search Food"
        name="search-text"
        value={searchedText}
        onChange={(event) => setSearchedText(event.target.value)}
      ></input>
      <label htmlFor="header-search">
        <span className="visually-hidden">Search Food</span>
        <button type="submit" id="mybutton" onClick={() => handleClick()}>
          Search
        </button>
        <div id="output"></div>
      </label>
    </>
  );
}

export default Search;

//useState hook was aktuell in Input ist zu holen
