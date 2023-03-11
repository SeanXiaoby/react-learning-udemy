import React from "react";
import ReactDom from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

// function Greeting() {
//   return React.createElement("h2", {}, "Hello world");
// }

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting />);
