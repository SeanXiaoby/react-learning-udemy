import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        const { id, title, info } = question;
        return (
          <SingleQuestion
            key={id}
            id={id}
            title={title}
            info={info}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
