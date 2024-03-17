import { Link } from "react-router-dom";
import slyle from "./header.module.css";
import brain from "../../assets/icons/brain.svg";
import headerFavorite from "../../assets/icons/headerStar.svg";
import { WeatherBlock } from "../weather-block/weather-block";

export const Header = ({ onFavoritePage }) => {
  return (
    <>
      <div className={slyle.header}>
        <div className={slyle.headerTitle}>
          BrainStorm <img src={brain} alt="brain" />
        </div>
        <div className={slyle.headerTitle}>
          {" "}
          <Link to="/testPage">Пройти тест на технологии</Link>
        </div>
        <WeatherBlock />
      </div>
      {onFavoritePage ? null : (
        <Link to="/favourites">
          <div className={slyle.headerTitle}>
            Избранное{" "}
            <img
              className={slyle.headerStar}
              src={headerFavorite}
              alt="headerFavorite"
            />
          </div>
        </Link>
      )}
    </>
  );
};
