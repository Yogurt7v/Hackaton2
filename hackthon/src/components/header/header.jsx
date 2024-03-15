import slyle from "./header.module.css";
import { TEAM } from "../../constants/team";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className={slyle.header}>
        <h1>BrainStorm Hackathon 2.0</h1>
        <ul className={slyle.teamList}>
          {TEAM.map((item) => (
            <li key={item.id} className={slyle.teamItem}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <Link to="/favorite">
          <div>Избранное</div>
        </Link>
      </div>
    </>
  );
};
