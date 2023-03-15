const Book = ({ book, id }) => {
  const { title, author, img, url } = book;
  return (
    <article className="book">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={title} />
      </a>
      <a href={url} target="_blank" rel="noreferrer">
        <h2>{title}</h2>
      </a>
      <h4>{author}</h4>

      <span className="number">{`# ${id + 1}`}</span>
    </article>
  );
};
export default Book;
