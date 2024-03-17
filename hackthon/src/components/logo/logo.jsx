import PropTypes from "prop-types";
import notAvilable from "../../assets/icons/unavailable.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./logo.module.css";

export const Logo = ({ alt, text, logo }) => {
  const [option, setOption] = useState();

  useEffect(() => {
    if (text === "" || text === "недоступен") {
      setOption(true);
    }
  }, [text]);

  return (
    <div className={style.userPageinfo}>
      <img src={logo} alt={alt} className={style.logo} />
      {option ? (
        <img src={notAvilable} alt={alt} className={style.logo} />
      ) : (
        <Link to={text} className={style.text}>
          {alt}
        </Link>
      )}
    </div>
  );
};

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
