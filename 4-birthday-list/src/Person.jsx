import React from "react";

const Person = ({ person, clear }) => {
  const { name, age, image } = person;
  return (
    <article className="person">
      <img className="img" src={image} />
      <div>
        <h4>{name}</h4>
        <p>{age} years old</p>
      </div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          clear(person.id);
        }}
      >
        remove
      </button>
    </article>
  );
};

export default Person;
