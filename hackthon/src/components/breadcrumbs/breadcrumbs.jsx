import { useMatches } from "react-router-dom";
import styles from "./breadcrumbs.module.css";
import { useEffect } from "react";

export const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.id));

  useEffect(() => {
    console.log(matches);
    console.log(crumbs);
  }, []);

  return (
    <ol className={styles.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        <li className={styles.breadcrumbs_item} key={index}>
          {crumb}
        </li>
      ))}
    </ol>
  );
};
