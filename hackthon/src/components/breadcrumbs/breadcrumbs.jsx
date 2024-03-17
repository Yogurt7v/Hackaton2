import { useLocation, useMatches } from "react-router-dom";
import style from "./breadcrumbs.module.css";

export const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.id));
  const location = useLocation();
  return (
    <ol className={style.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        <li
          className={`${style.breadcrumbs_item} ${
            location.pathname === matches[index].pathname ? style.current : ""
          }`}
          key={index}
        >
          {crumb}
        </li>
      ))}
    </ol>
  );
};
