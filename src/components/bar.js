import React from "react";
import "./bar.css";
import SearchBar from "./searchBox";

const Bar = () => {
  return (
    <div className="bar-container">
      <div className="item item1">Content for the 70% width item</div>
      <div className="item item2">
        <SearchBar />
      </div>
    </div>
  );
};

export default Bar;
