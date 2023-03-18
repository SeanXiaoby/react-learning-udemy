import React from "react";

const Control = ({ clearAll, restoreAll }) => {
  return (
    <div className="control">
      <button
        type="button"
        className=" btn
        btn-block"
        onClick={() => clearAll()}
      >
        Clear All
      </button>
      <button
        type="button"
        className=" btn
        btn-block"
        onClick={() => restoreAll()}
      >
        restore All
      </button>
    </div>
  );
};

export default Control;
