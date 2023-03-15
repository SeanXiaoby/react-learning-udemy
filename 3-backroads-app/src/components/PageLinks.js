import { pageLinks } from "./data";

const PageLinks = (props) => {
  return (
    <ul className={props.parentClass} id={props.parentClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={props.itemClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
