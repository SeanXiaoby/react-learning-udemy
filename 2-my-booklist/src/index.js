import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import BookProps from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <Banning title="Amazon Best Sellers" />
      <section className="booklist">
        {BookProps.map((prop, index) => {
          return <Book book={prop} id={index} key={prop.id} />;
        })}
      </section>
    </>
  );
};

const Banning = (props) => {
  return <h1 id="banning">{props.title}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
