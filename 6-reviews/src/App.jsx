import { useState } from "react";
import people from "./data.js";
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsChatRightQuoteFill,
} from "react-icons/bs";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((curr) => {
      return curr + 1 >= people.length ? 0 : curr + 1;
    });
  };

  const previousPerson = () => {
    setIndex((curr) => {
      return curr - 1 < 0 ? people.length - 1 : curr - 1;
    });
  };

  const randomPerson = () => {
    const randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomPerson();
    } else {
      setIndex(randomNum);
    }
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <BsChatRightQuoteFill />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info "> {text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={previousPerson}>
            <BsFillCaretLeftFill />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <BsFillCaretRightFill />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Random person
        </button>
      </article>
    </main>
  );
};
export default App;
