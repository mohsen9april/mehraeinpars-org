import React from "react";
import "../ItemSidebar/ItemSidebar.css";

const ItemSidebar = (props) => {
  return (
    <div className="item">
      <div className="icon">{props.icon}</div>
      <span> {props.name}</span>
    </div>
  );
};

export default ItemSidebar;
