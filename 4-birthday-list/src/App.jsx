import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} people's birthday today</h3>
        <List people={people} />
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
