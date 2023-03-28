import Title from "./Title";
import data from "./data";
import { useState } from "react";
import MenuTable from "./MenuTable";
import Categories from "./Categories";

const allCategories = [
  "all",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenu(newItems);
    }
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <MenuTable class Name="menu" menu={menu} />
      </section>
    </main>
  );
};
export default App;
