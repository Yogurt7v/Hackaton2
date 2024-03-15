import style from "./personal-page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { TEAM } from "../../constants";
import { ProgressBar } from "../../components/progress-bar/progress-bar";
import { Button } from "../../components";

export const PersonalPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userPage = TEAM.find((item) => item.id === params.id);


  const goBack = () => {
    console.log("goBack");
    navigate(-1);
  }

  return (
    <div className={style.PersonalPage}>
      <h1>{userPage.name}</h1>
      <h1>{userPage.surname}</h1>
      <p>{userPage.description}</p>

      <div>
        <h2>Социальные сети</h2>
        <p>Вконтакте: {userPage.socialNetwork.vk}</p>
        <p>Фейсбук: {userPage.socialNetwork.facebook}</p>
        <p>Инстаграм: {userPage.socialNetwork.instagram}</p>
        <p>Линкедин: {userPage.socialNetwork.linkedIn}</p>
        <div className={style.progressBarWrapper}>
          <h4>Прогресс</h4> 
          <ProgressBar progress={userPage.htmlProgress} color="blue" title="HTML" />
        </div>
      </div>
      <img src={userPage.image} className={style.personalPageImage} />
      <div>Здесь будет слайдер</div>
      <Button goBack={goBack} text ="Назад"/>
    </div>
  );
};
