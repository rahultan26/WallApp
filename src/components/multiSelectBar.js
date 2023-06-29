import React, { useState } from "react";
import "./multiselectbar.css";
import LincIcon from "../images/Link.svg";
import TwitterIcon from "../images/Twitter.svg";
import GiftIcon from "../images/gift.svg";
import NFTIcon from "../images/NFT.svg";
import ShieldIcon from "../images/Check.svg";
import DownIcon from "../images/down.svg";
import { FaMousePointer, FaShareAlt, FaKey, FaBird } from "react-icons/fa";
const MultiSelectBar = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const allItems = [
    { label: "OnClick", icon: LincIcon },
    { label: "Social", icon: TwitterIcon },
    { label: "Token", icon: NFTIcon },
  ];
  const moreItems = [
    { label: "Proof", icon: ShieldIcon },
    { label: "Waitlist", icon: GiftIcon },
    { label: "NFT", icon: NFTIcon },
  ];
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleItemClick = (item) => {
    let updatedSelection;

    if (selectedItems.includes(item)) {
      updatedSelection = selectedItems.filter(
        (selectedItem) => selectedItem !== item
      );
    } else {
      updatedSelection = [...selectedItems, item];
    }

    setSelectedItems(updatedSelection);
  };

  const handleAllClick = () => {
    if (selectedItems.length === allItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allItems);
    }
  };

  const handleMoreClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isAllSelected = selectedItems.length === allItems.length;
  const isMoreHighlighted =
    selectedItems.includes("Proof") ||
    selectedItems.includes("Waitlist") ||
    selectedItems.includes("NFT");

  return (
    <div className="multiselect-bar">
      <button
        className={`multiselect-item ${isAllSelected ? "selected" : ""}`}
        onClick={handleAllClick}
      >
        ALL
      </button>
      {allItems.map((item) => (
        <button
          key={item.label}
          className={`multiselect-item ${
            selectedItems.includes(item.label) ? "selected" : ""
          }`}
          onClick={() => handleItemClick(item.label)}
        >
          <img src={item.icon} alt="Icon" className="icon" />
          {item.label}
        </button>
      ))}
      <button
        className={`multiselect-item ${isMoreHighlighted ? "selected" : ""}`}
        onClick={handleMoreClick}
      >
        More
        <img src={DownIcon} alt="Icon" className="icon" />
      </button>
      {isDropdownOpen && (
        <div>
          {moreItems.map((item) => (
            <button
              key={item.label}
              className={`multiselect-item ${
                selectedItems.includes(item.label) ? "selected" : ""
              }`}
              onClick={() => handleItemClick(item.label)}
            >
              <img src={item.icon} alt="Icon" className="icon" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectBar;
