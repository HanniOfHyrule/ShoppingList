import React from "react";

const Search = () => {
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search Food</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search Food"
      name="s"
    ></input>
    <button type="submit">Search</button>
  </form>;
};

export default Search;
