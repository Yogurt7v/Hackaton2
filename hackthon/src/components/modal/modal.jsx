import style from "./modal.module.css";
import { Button } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  isOpenModalSelector,
  textForModalSelector,
  userPageSelector,
} from "../../redux/selectors";
import { setIsOpenModal, setTextForModal } from "../../redux/actions";

export const Modal = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(isOpenModalSelector);
  const text = useSelector(textForModalSelector);
  const userPage = useSelector(userPageSelector);
  if (!isOpenModal) {
    return null;
  }

  const onCkickYes = () => {
    localStorage.setItem(userPage.id, JSON.stringify(userPage.id));
    dispatch(setIsOpenModal(false));
  };
  const onCkickCancel = () => {
    dispatch(setIsOpenModal(false));
    dispatch(setTextForModal(""));
  };
  return (
    <div className={style.modal}>
      <div className={style.overlay}></div>
      <div className={style.box}>
        <h3>{text} </h3>
        <div className={style.buttons}>
          <Button text={"Да"} func={onCkickYes}></Button>
          <Button text={"Отмена"} func={onCkickCancel}></Button>
        </div>
      </div>
    </div>
  );
};
