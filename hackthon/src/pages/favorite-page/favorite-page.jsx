/* eslint-disable react-hooks/exhaustive-deps */
import style from "./favorite-page.module.css";
import { Button,} from "../../components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEAM } from "../../constants";

export const FavoritePage = () => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  const removeFromFavorite = (id) => {
    const removedFavorites = favorite.filter((favoriteItem) => favoriteItem.id !== id);
    setFavorite(removedFavorites);
  };

  const clearLocalStorage = () => {
    setFavorite([]);
  };

  useEffect(() => {
    const getFavorites = () => {
      const favoriteItems = TEAM.filter((teamMember) => localStorage.getItem(teamMember.id));
      setFavorite(favoriteItems);
    };

    getFavorites();
  }, []);

  return (
    <div className={style.FavoritePage}>
      <h1>Избранное</h1>
      <div className={style.favoriteWrapper}>
        {favorite.length > 0 ? (
          favorite.map((favoriteItem) => (
            <>
              <div className={style.favoriteCardWrapper} key={favoriteItem.id}>
                <div>{favoriteItem.name}</div>
              </div>
              <Button text={"Удалить"} borderRadius={"10px"} func={() => removeFromFavorite(favoriteItem.id)}/>
            </>
          ))
        ) : (
          <p>В избранном пока ничего нет</p>
        )}
      </div>
      <Button
        color={"blue"}
        text={"Назад"}
        borderRadius={"10px"}
        func={goBack}
      />
      {favorite.length > 0 ? (
        <Button
          color={"blue"}
          text={"Clear"}
          borderRadius={"10px"}
          func={clearLocalStorage}
        />
      ) : null}
    </div>
  );
};

