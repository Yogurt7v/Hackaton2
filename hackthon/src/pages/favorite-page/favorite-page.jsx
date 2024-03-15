import style from "./favorite-page.module.css";
import { Button, Card } from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TEAM } from "../../constants";

export const FavoritePage = () => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };
    const removeFromFavorite = (id) => {
      return () => {
        localStorage.removeItem(id);
        setFavorite(favorite.filter((item) => item.id !== id));
      };
    };

  useEffect(() => {
    let result = [];
    TEAM.filter((item) => {
      if (localStorage.getItem(item.id)) {
        return result.push(item);
      }
    });
    setFavorite(result);
  }, [setFavorite, clearLocalStorage, removeFromFavorite]);


  return (
    <div className={style.FavoritePage}>
      <h1>Избранное</h1>
      <div className={style.favoriteWrapper}>
        {favorite.length > 0 ? (
          favorite.map((favoriteItem) => (
            <>
              <div className={style.favoriteCardWrapper}>
                <div>{favoriteItem.name}</div>
              </div>
              <Button text={"Удалить"} borderRadius={"10px"} func={removeFromFavorite(favoriteItem.id)}/>
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
