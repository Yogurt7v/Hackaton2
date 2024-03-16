import style from "./logo.module.css";
import notAvilable from "../../assets/icons/unavailable.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Logo = ({ alt, text, logo }) => {

  const [option, setOption] = useState();

  useEffect(() => {
    if (text === "" || text === "недоступен") {
      setOption(true);
    }
  }, []);


  return (
    <div className={style.userPageinfo}>
      <img src={logo} alt={alt} className={style.logo} />
      {option ? (
        <img src={notAvilable} alt={alt} className={style.logo} />
      ) : (

        <Link to={text} className={style.text}>{alt}</Link>
      )}
    </div>
  );
};
