/* eslint-disable react/prop-types */
import { Button } from "../button/button";
import style from "./card.module.css";
import { Link } from "react-router-dom";

export const Card = ({ person }) => {
  return (
    <>
      <div className={style.card}>
        {person.image && (
          <div
            className={style.border}
            style={{
              backgroundImage: `url(${person.image})`,
            }}
          >
            <h2 className={style.cardText}>{person.name}</h2>
            <h2 className={style.cardText}>{person.surname}</h2>
            <Link to={`/team/${person.id}`}>
              <Button text={"Подробнее"} borderRadius={"10px"}></Button>{" "}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
