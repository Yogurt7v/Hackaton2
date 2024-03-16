/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import style from "./footer.module.css";

export const Footer = () => {
  const [time, setTime] = useState("");

  const calculateTimeDifference = () => {
    const startDate = new Date(2023, 7, 28, 12, 0, 0);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - startDate.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const result = `${days} : ${hours} : ${minutes} : ${seconds}`;
    setTime(result);
  };


  useEffect(() => {
    setTimeout(calculateTimeDifference, 1000);
  }, [calculateTimeDifference]);

  return (
    <div className={style.footerWrapper}>
      <div className={style.footerLeft}>
        <div className={style.footerText}>
          Студенты ResultSchool
        </div>
        <div className={style.footerLogo}>© 2024 </div>
      </div>

      <div className={style.footerCenter}>
        <div className={style.footerTimer}>{time}</div>
      </div>

      <div className={style.footerRight}>
        <div className={style.footerLink}>Link</div>
      </div>
    </div>
  );
};
