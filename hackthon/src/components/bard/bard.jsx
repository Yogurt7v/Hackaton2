import PropTypes from "prop-types";
import style from "./bard.module.css";
import { getRandomColor } from "../../utils";

export const Bard = ({ color, text }) => {

  if (!color) {
    color = getRandomColor();
  }

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
