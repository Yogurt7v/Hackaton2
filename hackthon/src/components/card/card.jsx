/* eslint-disable react/prop-types */
import style from "./card.module.css";
import { Link } from "react-router-dom";

export const Card = ({ person }) => {
  return (
    <>
    <Link to={`/team/${person.id}`}>

      <div className={style.CardWrapper}>
        <div className={style.card}>
          {person.image && (
            <div
              className={style.border}
              style={{
                backgroundImage: `url(${person.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className={style.cardText}>{person.name || ""}</h2>
              <h2 className={style.cardText}>{person.surname || ""}</h2>
            </div>
          )}
        </div>
      </div>
      </Link>
    </>
  );
};
