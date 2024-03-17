import resultLogo from "../../assets/images/resultLogo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./footer.module.css";

export const Footer = () => {
  const [time, setTime] = useState("");

  const calculateTimeDifference = () => {
    const startDate = new Date(2023, 7, 28, 12, 0, 0);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - startDate.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = Math.floor((timeDifference / 1000) % 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    const result = `${days} : ${hours} : ${minutes} : ${seconds}`;
    setTime(result);
  };

  useEffect(() => {
    setTimeout(calculateTimeDifference, 1000);
  }, [time]);

  return (
    <div className={style.footerWrapper}>
      <div className={style.footerLeft}>
        <div className={style.footerText}>BrainStorm</div>
        <div className={style.footerLogo}>© 2024 </div>
      </div>

      <div className={style.footerCenter}>
        <div className={style.footerTimer}>
          <div> Студенты ResultSchool уже:</div>

          <div className={style.footerTimerText}>{time}</div>
        </div>
      </div>

      <div className={style.footerRight}>
        <div className={style.footerLink}>
          <Link to="https://result.school/">
            <img
              className={style.resultLogo}
              src={resultLogo}
              alt="Result school logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
