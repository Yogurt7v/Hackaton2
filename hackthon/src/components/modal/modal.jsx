/* eslint-disable react/prop-types */
import style from "./modal.module.css";
import { Button } from "../button/button";

export const Modal = ({ setIsOpenModalWindows, userPage, setStar }) => {
  const onCkickYes = () => {
    localStorage.setItem(userPage.id, JSON.stringify(userPage.id));
    setStar(true);
    setIsOpenModalWindows(false);
  };
  const onCkickCancel = () => {
    setStar(false);
    setIsOpenModalWindows(false);
  };

  return (
    <div className={style.modal}>
      <div className={style.overlay}></div>
      <div className={style.box}>
        <h3>Уверены, что хотите добавить в избранное? </h3>
        <div className={style.buttons}>
          <Button text={"Да"} func={onCkickYes}></Button>
          <Button text={"Отмена"} func={onCkickCancel}></Button>
        </div>
      </div>
    </div>
  );
};
