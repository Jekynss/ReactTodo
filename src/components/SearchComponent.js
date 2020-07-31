import React from "react";

import "../styles/components/SearchString.css";

export default function SearchComponent({setSearchString}){

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <form className="search-form" id="search-form" onSubmit={handleChange}>
      <div className="input-search__icon">></div>
      <input
        type="text"
        name="search_string"
        className="search_string"
        placeholder="Search..."
        onChange={handleChange}
      />
    </form>
  );
};