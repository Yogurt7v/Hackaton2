import { Link } from "react-router-dom";
import slyle from "./header.module.css";
import brain from "../../assets/icons/brain.svg"
import headerFavorite from "../../assets/icons/headerStar.svg"
// import { TEAM } from "../../constants/team";

export const Header = ({ onFavoritePage }) => {
  return (
    <>
      <div className={slyle.header}>
        <div className={slyle.headerTitle}>BrainStorm <img src={brain} alt="brain"/></div>
        <div className={slyle.headerTitle}>Hackthon 2.0</div>
        {onFavoritePage ? null : (
          <Link to="/favourites">
            <div className={slyle.headerTitle}>Избранное <img className={slyle.headerStar} src={headerFavorite} alt="headerFavorite"/></div>
          </Link>
        )}
      </div>
    </>
  );
};
