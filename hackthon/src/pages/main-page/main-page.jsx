import { Header, Card, TeamInfo, Footer } from "../../components";
import { TEAM } from "../../constants/team";
import { Outlet } from "react-router-dom";
import style from "./main-page.module.css";

export const MainPage = () => {
  return (
    <>
      <Header onFavoritePage={false} />
      <div className={style.cardWrapper}>
        {TEAM.map((item) => (
          <Card person={item} key={item.id} />
        ))}{" "}
      </div>
      <TeamInfo />
      <Outlet />
      <Footer />
    </>
  );
};
