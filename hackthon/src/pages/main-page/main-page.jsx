import style from "./main-page.module.css";
import { Header, Card, TeamInfo, Footer, Modal } from "../../components";
import { TEAM } from "../../constants/team";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <Header onFavoritePage={false} />
      <TeamInfo />
      <div className={style.cardWrapper}>
        {TEAM.map((item) => (
          <Card person={item} key={item.id} />
        ))}{" "}
      </div>
      <Outlet />
      <Modal />
      <Footer />
    </>
  );
};
