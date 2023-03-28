import React, { useEffect, useState } from "react";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  //   console.log(activeId);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            toggleQuestion(isActive ? null : id);
          }}
        >
          {isActive ? <VscFoldUp /> : <VscFoldDown />}
        </button>
      </header>
      {isActive ? <p>{info}</p> : <></>}
    </article>
  );
};

export default SingleQuestion;
