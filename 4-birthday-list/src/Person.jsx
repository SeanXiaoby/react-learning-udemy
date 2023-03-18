import React from "react";

const Person = (props) => {
  const { name, age, image } = props.person;
  return (
    <article className="person">
      <img className="img" src={image} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  );
};

export default Person;
