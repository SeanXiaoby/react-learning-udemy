import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookProps = [
  {
    title: "Saved: A War Reporter's Mission to Make It Home",
    author: "Benjamin Hall",
    img: "https://images-na.ssl-images-amazon.com/images/I/713F+ivM9NL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Saved-Reporters-Mission-Make-Home/dp/0063309661/ref=zg_bs_books_sccl_1/134-2216578-9998904?psc=1",
    id: 1,
  },
  {
    title: "Daisy Jones & The Six: A Novel",
    author: "Taylor Jenkins Reid",
    img: "https://images-na.ssl-images-amazon.com/images/I/81a4bSDHqUL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798649/ref=zg_bs_books_sccl_5/134-2216578-9998904?psc=1",
    id: 2,
  },
  {
    title: "Baking Yesteryear: The Best Recipes from the 1900s to the 1980s",
    author: "B. Dylan Hollis",
    img: "https://images-na.ssl-images-amazon.com/images/I/81o-PyNHxbL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Baking-Yesteryear-Recipes-1900s-1980s/dp/0744080045/ref=zg_bs_books_sccl_4/134-2216578-9998904?psc=1",
    id: 3,
  },
  {
    title: "How to Catch a Leprechaun",
    author: "Adam Wallace",
    img: "https://images-na.ssl-images-amazon.com/images/I/81hSK0bkkFL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/How-Catch-Leprechaun-Adam-Wallace/dp/1492632910/ref=zg_bs_books_sccl_2/134-2216578-9998904?psc=1",
    id: 4,
  },
  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    img: "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907/ref=zg_bs_books_sccl_14/134-2216578-9998904?psc=1",
    id: 5,
  },
  {
    title: "It Starts with Us: A Novel (2) (It Ends with Us)",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL900_SR900,600_.jpg",
    url: "https://www.amazon.com/Starts-Us-Novel-Ends/dp/1668001225/ref=zg_bs_books_sccl_9/134-2216578-9998904?psc=1",
    id: 6,
  },
];

const BookList = () => {
  return (
    <>
      <Banning title="Best Seller Booklist" />
      {/* <EventExample /> */}
      <section className="booklist">
        {BookProps.map((prop) => {
          return <Book book={prop} key={prop.id} />;
        })}
      </section>

      <div
        style={{
          marginTop: "10px",
          alignItems: "center",
        }}
      ></div>
    </>
  );
};

const Banning = (props) => {
  return <h1 id="banning">{props.title}</h1>;
};

const Book = ({ book, children }) => {
  const { title, author, img, url } = book;

  // const handleMouseEnter = (e) => {
  //   e.target.style.boxShadow = "0px 10px 15px 1px rgba(0, 0, 0, 0.1)";
  // };

  // const handleMouseLeave = (e) => {
  //   e.target.style.boxShadow = "0px 0px";
  // };

  return (
    <article className="book">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={title} />
      </a>
      <a href={url} target="_blank" rel="noreferrer">
        <h2>{title}</h2>
      </a>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

// const EventExample = () => {
//   const handleFormInput = (e) => {
//     // console.log(e);
//   };

//   const handleButtonClick = (e) => {
//     console.log(`Hello, ${document.getElementById("text1").value}`);
//   };

//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//   };

//   return (
//     <section
//       style={{ width: "100%", margin: "2rem auto", textAlign: "center" }}
//     >
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           id="text1"
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           onChange={handleFormInput}
//           onSubmit={handleFormSubmission}
//         ></input>
//         <button onClick={handleButtonClick}>Click me</button>
//       </form>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
