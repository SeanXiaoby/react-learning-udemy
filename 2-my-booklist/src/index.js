import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const Image = () => (
  <img
    src="./images/book1.jpg"
    alt="Saved: A War Reporter's Mission to Make It Home"
  />
);
const Title = () => <h2>Saved: A War Reporter's Mission to Make It Home</h2>;
const Author = () => {
  return <h4>Benjamin Hall</h4>;
};
root.render(<BookList />);
