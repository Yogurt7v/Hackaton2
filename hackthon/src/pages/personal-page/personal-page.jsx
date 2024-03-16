/* eslint-disable react/no-unknown-property */
import style from "./personal-page.module.css";
import vk from "../../assets/icons/vk.svg"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import linkedIn from "../../assets/icons/linkedin.svg"
import github from "../../assets/icons/github.svg"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TEAM } from "../../constants";
import { ProgressBar, Button, Bard, GitSwip, Logo, Footer } from "../../components";
import  favLogo from "../../assets/icons/star.svg";

export const PersonalPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userPage = TEAM.find((item) => item.id === params.id);
  const [githubRepos, setGithubRepos] = useState([]);
  const [star, setStar] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userPage.githubLogin}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setGithubRepos(data.map((item) => item.name));
      });
  }, []);


  useEffect(() => {

    let personIsFavorite = localStorage.getItem(userPage.id);
    if(personIsFavorite){
      setStar(true)
    }
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const addToFavorite = () => {
    localStorage.setItem(userPage.id, JSON.stringify(userPage.id));
    setStar(true);
  };

  return (
    <div className={style.PersonalPage}>
      <Button
        text={"Добавить в избранное"}
        borderRadius={"10px"}
        func={addToFavorite}
      />
      {star? (<div><img src={favLogo} alt="Favorite" className={style.starLogo}/></div>):(null)}
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
        <Logo alt={"vkontakte"} text={userPage.socialNetwork.vk} logo={vk}/>
        <Logo alt={"facebook"} text={userPage.socialNetwork.facebook} logo={facebook}/>
        <Logo alt={"instagram"} text={userPage.socialNetwork.instagram} logo={instagram}/>
        <Logo alt={"linkedin"} text={userPage.socialNetwork.linkedIn} logo={linkedIn}/>
        <Logo alt={"github"} text={userPage.socialNetwork.github} logo={github}/>
        <div className={style.progressBarWrapper}>
          <h4>Прогресс</h4>
          <ProgressBar
            progress={userPage.htmlProgress}
            color="blue"
            title="HTML"
          />
        </div>
      </div>

      <img src={userPage.image} className={style.personalPageImage} />
      <div className={style.swiperWrapper}>
        {githubRepos.length > 0 ? <GitSwip githubRepos={githubRepos} /> : null}
      </div>
      <Button func={() => goBack()} text="Назад" />
      <Footer />
    </div>
  );
};
