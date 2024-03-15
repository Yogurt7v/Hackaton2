import slyle from "./header.module.css";
import { TEAM } from "../../constants/team";
import star from "./star.png";

export const Header = () => {
  return (
    <>
      <div className={slyle.header}>
        <h1>BrainStorm Hackathon 2.0</h1>
        <ul className={slyle.teamList}>
          {TEAM.map((item) => (
            <li key={item.id} >
              <p className={slyle.names}>{item.name}</p>
            </li>
          ))}
        </ul>
        <div className={slyle.favorites}>
          <img className={slyle.starspiner} src={star} alt="Избранное"/>
          <h3>Избранное</h3>
        </div>
      </div>
    </>
  );
};
