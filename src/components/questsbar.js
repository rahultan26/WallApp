import React, { useState } from "react";
import "./questsbar.css";

const Questsbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div class="frame-4293">
      <div class="frame-4292">
        <div class="frame-4290">
          <div class="quests-23">Quests (10)</div>
        </div>
      </div>

      <div class="frame-4877">
        <svg
          class="search"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_177)">
            <path
              d="M12.5 19C16.366 19 19.5 15.866 19.5 12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12C5.5 15.866 8.63401 19 12.5 19Z"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5 20L17.5 17"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_177">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search quest or project"
          style={{ backgroundColor: "transparent", border: "none" }}
        />
      </div>
    </div>
  );
};

export default Questsbar;
