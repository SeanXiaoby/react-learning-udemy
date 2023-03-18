import { useState } from "react";
import Control from "./Control";
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
        <Control clearAll={clearAll} restoreAll={restoreAll} />
      </section>
    </main>
  );
};
export default App;
