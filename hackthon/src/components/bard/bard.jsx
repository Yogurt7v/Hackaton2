import PropTypes from "prop-types";
import style from "./bard.module.css";

export const Bard = ({ color, text }) => {
  return (
    <div className={style.BardWrapper} style={{ backgroundColor: `${color}` }}>
      <div className={style.BardText}>{text}</div>
    </div>
  );
};

Bard.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
