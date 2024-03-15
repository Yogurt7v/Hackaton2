import { Link } from "react-router-dom";
import slyle from "./header.module.css";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";

// import { TEAM } from "../../constants/team";

export const Header = () => {
  return (
    <>
      <div className={slyle.header}>
        <h1>BrainStorm Hackathon 2.0</h1>
        {/* <ul className={slyle.teamList}>
          {TEAM.map((item) => (
            <li key={item.id} className={slyle.teamItem}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul> */}
        <Breadcrumbs />
        <Link to="/favourites">Избранное</Link>
      </div>
    </>
  );
};
