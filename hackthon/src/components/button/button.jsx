/* eslint-disable react/prop-types */
import style from "./button.module.css";

export const Button = ({ color, text, borderRadius, func, disabled, id }) => {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: color, borderRadius: borderRadius }}
      onClick={() => func()}
      disabled={disabled}
      id={id}
    >
      {text}
    </button>
  );
};
