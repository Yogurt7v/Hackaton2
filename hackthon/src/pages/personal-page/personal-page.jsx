/* eslint-disable react/no-unknown-property */
import style from "./personal-page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { TEAM } from "../../constants";
import { ProgressBar, Button, Bard, GitSwip } from "../../components";
import { getRandomColor } from "./utils";
import { useEffect, useState } from "react";

export const PersonalPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userPage = TEAM.find((item) => item.id === params.id);
  const [githubRepos, setGithubRepos] = useState([]);

  const progressBarType = 'line'; 
  const progressBarStyle = `${progressBarType}ProgressBarWrapper`;

//`style.${progressBarType}ProgressBarWrapper`

  useEffect(() => {
    fetch(`https://api.github.com/users/${userPage.githubLogin}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setGithubRepos(data.map((item) => item.name));
      });
  }, []);


  const goBack = () => {
    navigate(-1);
  };
  
  console.log(userPage)
  return (
    <div className={style.PersonalPage}>
      <h1>{userPage.name}</h1>
      <h1>{userPage.surname}</h1>
      <p>{userPage.description}</p>

      {userPage.special.length > 0 ? (
        <div className={style.specialWrapper}>
          {userPage.special.map((item) => (
            <Bard color={"green"} text={item} key={item} />
          ))}
        </div>
      ) : null}

      <div>
        <h2>Социальные сети</h2>
        <p>Вконтакте: {userPage.socialNetwork.vk}</p>
        <p>Фейсбук: {userPage.socialNetwork.facebook}</p>
        <p>Инстаграм: {userPage.socialNetwork.instagram}</p>
        <p>Линкедин: {userPage.socialNetwork.linkedIn}</p>
        <p>Гит: {userPage.socialNetwork.github}</p>
        <div className={style[progressBarStyle]}>
          <h4>Прогресс</h4>
          {
            Object.entries(userPage.skills).map((skillInfo, index) => (
              <ProgressBar
              key={index}
              skillInfo={skillInfo}
              color={getRandomColor()}
              type={progressBarType}
            />
            ))

          }
        </div>
      </div>
      <img src={userPage.image} className={style.personalPageImage} />
      <div className={style.swiperWrapper}>
        {githubRepos.length>0 ? (
          <GitSwip githubRepos={githubRepos} />
        ): null}

      </div>
      <Button goBack={goBack} text="Назад" />
    </div>
  );
};
