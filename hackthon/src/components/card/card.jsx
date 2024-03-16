/* eslint-disable react/prop-types */
import style from "./card.module.css";
import starIcon from "../../assets/icons/star.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TEAM } from "../../constants/team";

export const Card = ({ person }) => {

  // const [star, setStar] = useState(false);

  // useEffect(() => {
  //   TEAM.forEach((item) => {
  //     if (item.id === localStorage.getItem(item.id)) {
  //       setStar(true);
  //     }
  //   })
  // }, []);

  return (
    <>
      <Link to={`/team/${person.id}`}>
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
              {/* {star ? (
                <div>
                  <img src={starIcon} alt="star" className={style.star} />
                </div>
              ) : null} */}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};
