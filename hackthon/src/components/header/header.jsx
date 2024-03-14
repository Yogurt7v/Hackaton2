import slyle from "./header.module.css";
import { TEAM } from "../../constants/team";


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
        <div>Избранное</div>
      </div>
    </>
  );
};
