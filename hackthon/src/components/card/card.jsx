import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "../button/button";
import style from "./card.module.css";

export const Card = ({ person }) => {
  return (
    <>
      <div className={style.card}>
        {person.image && (
          <div
            className={style.border}
            style={{
              backgroundImage: `url(${person.image})`,
            }}></div>
        )}
        <div className={style.cardTextWrapper}>
          <div className={style.cardText}>{person.name}</div>
          <div className={style.cardText}>{person.surname}</div>
        </div>
        <Link to={`/team/${person.id}`}>
          <Button
            className={style.cardButton}
            text={"Открыть"}
            borderRadius={"10px"}></Button>{" "}
        </Link>
      </div>
    </>
  );
};

Card.propTypes = {
  person: PropTypes.object,
};
