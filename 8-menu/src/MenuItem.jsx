import React, { useState } from "react";

const MenuItem = ({ title, price, img, desc }) => {
  const [expand, setExpand] = useState(false);
  const isToExpand = desc.substring(0, 100) !== desc;

  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">
          {expand ? desc : desc.substring(0, 100)}
          {isToExpand && (
            <button className="item-btn" onClick={() => setExpand(!expand)}>
              {expand ? " show less" : "... show more"}
            </button>
          )}
        </p>
      </div>
    </article>
  );
};

export default MenuItem;
