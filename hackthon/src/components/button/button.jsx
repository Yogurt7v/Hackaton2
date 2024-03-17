import PropTypes from "prop-types";
import style from "./button.module.css";

export const Button = ({ color, text, borderRadius, func, disabled, id }) => {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: color, borderRadius: borderRadius }}
      onClick={() => func()}
      disabled={disabled}
      id={id}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  borderRadius: PropTypes.string,
  func: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};
