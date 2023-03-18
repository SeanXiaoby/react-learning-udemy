import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const clearOne = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const restoreAll = () => {
    setPeople(data);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} people's birthday today</h3>
        <List people={people} clear={clearOne} />
        <button
          type="button"
          className=" btn
        btn-block"
          onClick={() => clearAll()}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
