import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookProps = [
  {
    title: "Saved: A War Reporter's Mission to Make It Home",
    author: "Benjamin Hall",
    img: "https://images-na.ssl-images-amazon.com/images/I/713F+ivM9NL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Saved-Reporters-Mission-Make-Home/dp/0063309661/ref=zg_bs_books_sccl_1/134-2216578-9998904?psc=1",
  },
  {
    title: "Daisy Jones & The Six: A Novel",
    author: "Taylor Jenkins Reid",
    img: "https://images-na.ssl-images-amazon.com/images/I/81a4bSDHqUL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798649/ref=zg_bs_books_sccl_5/134-2216578-9998904?psc=1",
  },
  {
    title: "Baking Yesteryear: The Best Recipes from the 1900s to the 1980s",
    author: "B. Dylan Hollis",
    img: "https://images-na.ssl-images-amazon.com/images/I/81o-PyNHxbL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Baking-Yesteryear-Recipes-1900s-1980s/dp/0744080045/ref=zg_bs_books_sccl_4/134-2216578-9998904?psc=1",
  },
  {
    title: "How to Catch a Leprechaun",
    author: "Adam Wallace",
    img: "https://images-na.ssl-images-amazon.com/images/I/81hSK0bkkFL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/How-Catch-Leprechaun-Adam-Wallace/dp/1492632910/ref=zg_bs_books_sccl_2/134-2216578-9998904?psc=1",
  },
  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    img: "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907/ref=zg_bs_books_sccl_14/134-2216578-9998904?psc=1",
  },
  {
    title: "It Starts with Us: A Novel (2) (It Ends with Us)",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Starts-Us-Novel-Ends/dp/1668001225/ref=zg_bs_books_sccl_9/134-2216578-9998904?psc=1",
  },
];

const Banning = (props) => {
  return <h1 id="banning">{props.title}</h1>;
};

const Book = ({ book, children }) => {
  const { title, author, img, url } = book;
  return (
    <article className="book">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={title} />
      </a>

      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const BookList = () => {
  return (
    <>
      <Banning title="Best Seller Booklist" />

      <section className="booklist">
        {BookProps.map((prop) => {
          return <Book book={prop} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
