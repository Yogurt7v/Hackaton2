import style from "./main-page.module.css";
import { Header, Card, TeamInfo } from "../../components";
import { TEAM } from "../../constants/team";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <Header />
      <TeamInfo />
      <div className={style.CardWrapper}>
        {TEAM.map((item) => (
          <Card person={item} key={item.id} />
        ))}{" "}
      </div>
      <Outlet />
    </>
  );
};
