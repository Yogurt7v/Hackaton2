import { Link } from "react-router-dom";
import slyle from "./header.module.css";

import { TEAM } from "../../constants/team";

export const Header = ({ onFavoritePage }) => {
  return (
    <>
      <div className={slyle.header}>
        <h1>BrainStorm Hackathon 2.0</h1>
        <ul className={slyle.teamList}></ul>
          {TEAM.map((item) => (
            <li key={item.id} className={slyle.teamItem}>
              <p>{item.name}</p>
            </li>
          ))}
        {onFavoritePage ? null : (
          <Link to="/favourites">
            <div>Избранное</div>
          </Link>
        )}
      </div>
    </>
  );
};
