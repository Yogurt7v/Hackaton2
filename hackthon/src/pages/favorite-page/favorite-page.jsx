import { Button, Card,  Header, Layout } from "../../components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEAM } from "../../constants";
import style from "./favorite-page.module.css";
// import { useLocation } from "react-router-dom";

export const FavoritePage = () => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  const removeFromFavorite = (id) => {
    const removedFavorites = favorite.filter(
      (favoriteItem) => favoriteItem.id !== id
    );
    localStorage.removeItem(id);
    setFavorite(removedFavorites);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setFavorite([]);
  };

  useEffect(() => {
    const getFavorites = () => {
      const favoriteItems = TEAM.filter((teamMember) =>
        localStorage.getItem(teamMember.id)
      );
      setFavorite(favoriteItems);
    };

    getFavorites();
  }, []);

  return (
    <>
      <Layout>
      <Header onFavoritePage={true}/>
      <div className={style.favoritePage}>

      <div className={style.favoritePageWrapper}>
        <h1>Избранное</h1>
        <div className={style.favoriteWrapper}>
          {favorite.length > 0 ? (
            favorite.map((favoriteItem) => (
              <>
                <div
                  className={style.favoriteCardWrapper}
                  key={favoriteItem.id}
                >
                  <div>{favoriteItem.name}</div>
                  <Card person={favoriteItem}/>
                  <Button
                    text={"Удалить"}
                    borderRadius={"10px"}
                    func={() => removeFromFavorite(favoriteItem.id)}
                  />
                </div>
              </>
            ))
          ) : (
            <p>В избранном пока ничего нет</p>
          )}
        </div>
        <div className={style.favoriteButtons}>
          {favorite.length > 0 ? (
            <Button
              text={"Удалить все"}
              borderRadius={"10px"}
              func={clearLocalStorage}
            />
          ) : null}
        <Button
          text={"Назад"}
          borderRadius={"10px"}
          func={goBack}
        />
        </div>
        </div>
      </div>
      </Layout>
    </>
  );
};
