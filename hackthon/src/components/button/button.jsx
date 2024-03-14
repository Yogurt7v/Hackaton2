/* eslint-disable react/prop-types */
import style from "./button.module.css";

export const Button = ( {color,  text, borderRadius, goBack}) => {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: color, borderRadius: borderRadius }}
      onClick={()=>goBack()}
    >
      {text}
    </button>
  );
};
