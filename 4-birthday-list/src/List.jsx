import React from "react";
import Person from "./Person";

const List = ({ people, clear }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} person={person} clear={clear} />;
      })}
    </section>
  );
};

export default List;
