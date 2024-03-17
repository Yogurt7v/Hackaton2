import PropTypes from "prop-types";
import brain from "../../assets/icons/brain.svg";
import headerFavorite from "../../assets/icons/headerStar.svg";
import { Link } from "react-router-dom";
import { WeatherBlock } from "../weather-block/weather-block";
import slyle from "./header.module.css";

export const Header = ({ onFavoritePage }) => {
  return (
    <>
      <div className={slyle.header}>
        <div className={slyle.headerTitle}>
          <div>BrainStorm</div> 
          <Link to="/">
          <img src={brain} alt="brain" />
          </Link>
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
        <Link to="/testPage" className={slyle.headerTitle}>Пройти тест на технологии</Link>
        <WeatherBlock />
      </div>
    </>
  );
};

Header.propTypes = {
  onFavoritePage: PropTypes.bool.isRequired,
};
