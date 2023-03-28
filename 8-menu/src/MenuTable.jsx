import React from "react";
import MenuItem from "./MenuItem";

const MenuTable = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MenuTable;
