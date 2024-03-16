/* eslint-disable react/no-unknown-property */
import style from "./personal-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TEAM } from "../../constants";
import {
  ProgressBar,
  Button,
  Bard,
  // GitSwip,
  Logo,
  Layout,
} from "../../components";

import {
  setIsOpenModal,
  setTextForModal,
  setUserPage,
} from "../../redux/actions";
import { userPageSelector } from "../../redux/selectors";

export const PersonalPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [setGithubRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userPage.githubLogin}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setGithubRepos(data.map((item) => item.name));
      });
    console.log(TEAM.find((item) => item.id === params.id));
    dispatch(setUserPage(TEAM.find((item) => item.id === params.id)));
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  const userPage = useSelector(userPageSelector);
  const addToFavorite = () => {
    dispatch(setIsOpenModal(true));
    dispatch(setTextForModal("Уверены, что хотите добавить в избранное?"));
  };

  return (
    <>
      <Layout>
        <div className={style.personalPage}>
          <Button
            text={"Добавить в избранное"}
            borderRadius={"10px"}
            func={addToFavorite}
          />
          <h1>{userPage.name}</h1>
          <h1>{userPage.surname}</h1>
          <p>{userPage.description}</p>

          {userPage.special?.length > 0 ? (
            <div className={style.specialWrapper}>
              {userPage.special.map((item) => (
                <Bard color={"green"} text={item} key={item} />
              ))}
            </div>
          ) : null}

          <div>
            <h2>Социальные сети</h2>
            <Logo
              alt={"vkontakte"}
              text={userPage.socialNetwork?.vk}
              logo={vk}
            />
            <Logo
              alt={"facebook"}
              text={userPage.socialNetwork?.facebook}
              logo={facebook}
            />
            <Logo
              alt={"instagram"}
              text={userPage.socialNetwork?.instagram}
              logo={instagram}
            />
            <Logo
              alt={"linkedin"}
              text={userPage.socialNetwork?.linkedIn}
              logo={linkedIn}
            />
            <Logo
              alt={"github"}
              text={userPage.socialNetwork?.github}
              logo={github}
            />
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
            {/* {githubRepos.length > 0 ? <GitSwip githubRepos={githubRepos} /> : null} */}
          </div>
          <Button func={() => goBack()} text="Назад" />
        </div>
      </Layout>
    </>
  );
};
